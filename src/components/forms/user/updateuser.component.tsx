"use client"
import * as React from "react";
import { IoAlertCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton } from "@/components/buttons/buttons.component";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import axios from "axios";
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, "First name must be atleast 2 characters")
    .max(32, "First name must be less than 32 characters")
})

type FormSchemaType = z.infer<typeof FormSchema>;
type Props = {
  username: string;
}

export default function UpdateUserForm({username}: Props) {

  const { data:session } = useSession()
  const router = useRouter();

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
      const { data } = await axios.post(`/api/user/update/${session?.user?.email}`, {
        values,
      });

      router.refresh();

      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form className="my-8 text-sm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="text-gray-700">Update username</label>
        <input 
          type="text" 
          className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
          defaultValue={username}
          id="name"
          {...register("name")}
          style={{
            borderColor: `${errors?.name?.message ? "#ED4337" : ""}`,
          }}
          disabled={isSubmitting}
        />

        {errors?.name?.message && (
          <div className="fill-red-500 absolute right-2 top-2.5 text-xl">
            <IoAlertCircle fill="#ED4337" />
          </div>
        )}

        {errors?.name?.message && <p className="text-sm text-[#ED4337] mt-1">{errors?.name?.message}</p>}

        <AuthButton
          type="submit"
          text="Update"
          disabled={isSubmitting}
        />
      </form>
    </div>
  )
}
