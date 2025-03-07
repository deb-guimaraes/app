'use client'
        {/* usar as libs:
          zod @hookform/resolvers 
          react-hook-form
          e remover o use client*/}

import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "../components/input";
import { Button } from "../components/button";
{/*import { useForm } from 'react-hook-form'
import { z } from 'zod' */}

{/*const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema> */}

export function SubscriptionForm() {
  {/*const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data)
  } */}

  function onSubscribe(data: any) {

  }

  return (
    <form action={onSubscribe} className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"> {/*onSubmit={handleSubmit(onSubscribe)} */}
      <h2 className="font-heading font-semibold text-gray text-xl"> 
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome Completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="Email" />
        </InputRoot>
      </div>

      {/*<div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div> */}

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  );
}
