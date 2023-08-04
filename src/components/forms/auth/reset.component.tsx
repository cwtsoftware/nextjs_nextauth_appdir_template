"use client"
import * as React from "react";
import Input from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiLock } from "react-icons/fi";
import { useState, useEffect } from "react";
import zxcvbn from "zxcvbn";
import { AuthButton } from "@/components/buttons/buttons.component";
import { toast } from "react-hot-toast";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import axios from "axios";
import Link from "next/link";
import { redirect } from 'next/navigation'

interface IResetFormProps {
  token: string;
}

const FormSchema = z.object({
    password: z
      .string()
      .min(6, "Password must be atleast 6 characters.")
      .max(52, "Password must be less than 52 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

type FormSchemaType = z.infer<typeof FormSchema>;

const ResetForm: React.FunctionComponent<IResetFormProps> = (props) => {

  const { token } = props;

  const [passwordScore, setPasswordScore] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {

    try {
      const { data } = await axios.post("/api/reset", {
        password: values.password,
        token,
      });

      reset();
      toast.success(data.message);

      redirect('/')
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const validatePasswordStrength = () => {
    let password = watch().password;
    return zxcvbn(password ? password : "").score;
  };

  useEffect(() => {
    setPasswordScore(validatePasswordStrength());
  }, [watch().password]);

  return (
    <div className="w-full px-12 py-4">
      <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
        Reset password
      </h2>

      <p className="text-center text-sm text-gray-600 mt-2">
        Sign in instead? &nbsp;
        <Link
          href="/auth"
          className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
        >
          Sign in
        </Link>
      </p>

      <form className="my-8 text-sm" onSubmit={handleSubmit(onSubmit)}>

        <Input
          name="password"
          label="Password"
          type="password"
          icon={<FiLock />}
          placeholder="***********"
          register={register}
          error={errors?.password?.message}
          disabled={isSubmitting}
        />

        {watch().password?.length > 0 && (
          <div className="flex mt-2 gap-1 items-center">
            <p 
              className={`text-sm font-semibold ${
                passwordScore <= 2
                  ? "text-red-400"
                  : passwordScore < 4
                  ? "text-yellow-400"
                  : "text-green-500"
              }`}
            >Password strength</p>
            {Array.from(Array(1).keys()).map((span, i) => (
              <span className="w-1/4 sm:w-1/5 px-1" key={i}>
                <div
                  className={`h-2 rounded-xl b ${
                    passwordScore <= 2
                      ? "bg-red-400"
                      : passwordScore < 4
                      ? "bg-yellow-400"
                      : "bg-green-500"
                  }`}
                ></div>
              </span>
            ))}
          </div>
        )}

        <Input
          name="confirmPassword"
          label="Confirm password"
          type="password"
          icon={<FiLock />}
          placeholder="***********"
          register={register}
          error={errors?.confirmPassword?.message}
          disabled={isSubmitting}
        />

        <AuthButton
          type="submit"
          text="Change password"
          disabled={isSubmitting}
        />
        
      </form>
    </div>
  );
};

export default ResetForm;