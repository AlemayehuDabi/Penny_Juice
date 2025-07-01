import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "../libs/authClient";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type formData = z.infer<typeof formSchema>;

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: formData) => {
    console.log("sign up is clicked");

    try {
      await authClient.signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          onSuccess: ({ data }) => {
            console.log(data);
          },
          onError: ({ error }) => {
            console.log(error);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center">
        <div className="border border-gray-200 px-8 py-6 rounded-md shadow-2xl shadow-white w-full max-w-md bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="full name"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    placeholder="user@gmail.com"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <input
                    type="password"
                    {...field}
                    placeholder="**********"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              {isSubmitting ? "signing up..." : "sign up"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
