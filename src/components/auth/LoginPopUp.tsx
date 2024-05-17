"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { Separator } from "../ui/separator"
import { Switch } from "../ui/switch"
import { Link } from "react-router-dom"

interface LoginPopUpProps {
    white?: boolean
    scrollPosition?: number
    string?: string
    underline?: boolean
}

const LoginPopUp: React.FC<LoginPopUpProps> = ({ scrollPosition, white, string = "Masuk", underline=false }) => {
    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6, {
            message: "Password must be at least 6 characters",
        }),
        remember_me: z.boolean().default(false).optional(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember_me: false,
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <div className={`${underline ? 'py-[0px] px-0 hover:underline' : 'py-[5px] px-4'} font-inter cursor-pointer hover:border-black ${(scrollPosition || 0) > 0 || white === false ? 'hover:border-black' : 'md:hover:border-white'}  border-2 border-transparent transition-all rounded-lg`}>
                    {string}
                </div>
            </DialogTrigger>
            <DialogContent>

                <div className="w-full h-full flex flex-col justify-center items-center mt-2 gap-4">
                    <h1 className="text-3xl font-bold">Selamat Datang Kembali</h1>
                    <p className="text-black">Masuk kedalam akun kamu</p>

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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="Email" {...field} className="min-w-[300px] focus-visible:ring-[#A13670]" />
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

                            <FormField
                                control={form.control}
                                name="remember_me"
                                render={({ field }) => (
                                    <FormItem className="mt-2   ">
                                        <FormControl>
                                            <div className="flex flex-row w-[300px] justify-between">
                                                <div className="flex flex-row items-center">
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                    <h1 className="text-xs ml-2 text-gray-500">
                                                        Ingat saya
                                                    </h1>
                                                </div>
                                                <h1 className="text-xs cursor-pointer text-gray-500 hover:underline">
                                                    Lupa Password?
                                                </h1>
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="mt-6 bg-[#771444] hover:bg-[#a5408c] max-w-[300px] w-full">
                                Masuk
                            </Button>
                        </form>
                    </Form>

                    <div className="text-xs">
                        <span className="text-gray-500">Belum punya akun? </span><span className="text-[#A13670] hover:underline cursor-pointer"><Link to={'/register'}>Buat akun yuk!</Link></span>
                    </div>

                    <span className="text-gray-500 text-[10px]">
                        © 2022-2024, Peluang.co
                    </span>
                </div>

            </DialogContent>
        </Dialog>

    )
}

export default LoginPopUp