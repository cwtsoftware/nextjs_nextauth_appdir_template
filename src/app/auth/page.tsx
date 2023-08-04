import LoginRegister from "@/components/forms/auth/loginregister.component";
import { cookies } from 'next/headers';
import { getCsrfToken, getProviders  } from 'next-auth/react';

export default async function auth({}: {}) {
  
  cookies();
  const csrfToken = await getCsrfToken();
  const providers = await getProviders();
  const providerObject = Object.values(providers!)

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-100 flex items-center justify-center">

        {/*----Form----*/}
        <div className="w-full sm:w5/6 md:w-2/3 lg:w1/2 xl:w-1/3 2xl:w-1/3 h-full bg-white flex flex-col items-center justify-center">
          <LoginRegister csrfToken={csrfToken} providers={providerObject}/>
        </div>
      </div>
    </div>
  );
}
