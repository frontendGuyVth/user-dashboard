'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FormNameSignup } from "./FormNameSignup"
import { FormProvider, useController, useForm, useFormContext } from "react-hook-form"


const Signup = () => {

    const methods = useForm()

    return (
        <section className="w-full flex justify-center items-center h-screen">
            <FormProvider {...methods}>
                <CardWithForm />
            </FormProvider>
        </section>
    )
}

export default Signup


export function CardWithForm() {

    const { control } = useForm();


    const {
        field: { value: firstName, onChange: onChangeFirstName }
    } = useController({
        name: "firstName",
        control
    });

    const { field: { value: lastName, onChange: onChangeLastName } } = useController({
        name: "lastName",
        control
    })

    const { getValues } = useFormContext()
    const formData = getValues()



    const excuteForm = () => {
        console.log(formData, "form data");

    }

    return (
        <Card className="flex flex-col items-center rounded-[20px]">
            <CardHeader>
                <CardTitle>Sign up</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 w-[400px]">
                            <Label>First Name</Label>
                            <Input value={firstName} placeholder="First Name" onChange={(e) => {
                                onChangeFirstName(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-[400px]">
                            <Label>Last Name</Label>
                            <Input value={lastName} placeholder="Last Name" onChange={(e) => {
                                onChangeLastName(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button
                    onClick={excuteForm}
                >Sign-Up</Button>
            </CardFooter>
        </Card>
    )
}
