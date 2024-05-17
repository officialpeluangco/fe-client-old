import registerBanner from '../assets/images/regis-peluang.jpg'
import logo from '../assets/images/Logo 2024 - Berwarna.png'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import { Link } from 'react-router-dom'
import LoginPopUp from '@/components/auth/LoginPopUp'

const RegisterPage = () => {
  const formSchema = z.object({
    username: z.string().min(1,{
      message: "Cannot be empty"
    }),
    phone: z.string().min(10, {
      message: "Phone number must be at least 10 characters",
    }),
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    remember_me: z.boolean().default(false).optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      remember_me: false,
      phone: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <div className='w-full max-w-[600px] h-fit flex flex-row justify-between items-center'>
          <Link to='/'>
            <img className="md:w-[139.86px] w-[100px] cursor-pointer" src={logo} width={100} height={50} />
          </Link>
          <div className="text-sm">
            <span className="text-gray-500">Sudah punya akun? </span><span className="text-[#A13670] hover:underline cursor-pointer"><LoginPopUp underline string='Masuk sekarang!' /></span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <h1 className="text-3xl font-bold">Buat Akun</h1>
          <p className="text-black">Mulai Masa Depan-mu sekarang</p>

          <div className="flex flex-row gap-4">
            <Button variant={"outline"} className="gap-2 rounded-lg hover:border-[#A13670] bg-transparent">
              <FcGoogle size={22} className="" />
              <h1 className="text-sm">
                Google
              </h1>
            </Button>
            <Button variant={"outline"} className="gap-2 rounded-lg hover:border-[#A13670] bg-transparent">
              <FaFacebook size={23} className="text-blue-600" />
              <h1 className="text-sm">
                Facebook
              </h1>
            </Button>
          </div>

          <div className="flex flex-row w-[300px] justify-center items-center gap-2">
            <Separator orientation="horizontal" className="max-w-[90px]" />
            <h2 className="text-gray-500 text-[10px] w-fit">
              Atau Masuk dengan
            </h2>
            <Separator orientation="horizontal" className="max-w-[90px]" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="username" placeholder="Nama Lengkap" {...field} className="min-w-[300px] focus-visible:ring-[#A13670]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormControl>
                      <Input type="email" placeholder="Masukan Email" {...field} className="min-w-[300px] focus-visible:ring-[#A13670]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormControl>
                      <Input type="phone" placeholder="Masukan Telephone" {...field} className="min-w-[300px] focus-visible:ring-[#A13670]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} className="min-w-[300px] focus-visible:ring-[#A13670]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="mt-6 bg-[#771444] hover:bg-[#a5408c] max-w-[300px] w-full">
                Masuk
              </Button>
            </form>
          </Form>

        </div>
        <span className="text-gray-500 text-[10px] h-fit py-4">
          © 2022-2024, Peluang.co
        </span>
      </div>
      <div className="w-1/2 h-full">
        <div className='w-full h-screen'>
          <img
            className='w-full h-full object-cover'
            src={registerBanner}
            alt="" />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage