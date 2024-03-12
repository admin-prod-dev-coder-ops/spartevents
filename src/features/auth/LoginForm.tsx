import { FieldValues, useForm } from "react-hook-form";
import ModalWrapper from "../../app/common/ModalWrapper";
import { Button, Form } from "semantic-ui-react";
import { useAppDispatch } from "../../app/store/store";
import { closeModal } from "../../app/common/modals/modalSlice";
import { signIn } from "./authSlice";

export default function LoginForm() {
    const {register, handleSubmit, 
        formState:{isSubmitting,isValid,isDirty,errors}} = useForm({
            mode:'onTouched'
        })
    const dispatch = useAppDispatch();

   function onSubmit(data: FieldValues){
        dispatch(signIn(data))
        dispatch(closeModal())
   }
  return (
    <ModalWrapper header='Sign into SpartEvents'>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input 
            defualtvalues=''
            placeholder='Email address'
            {...register('email',{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}
            error={
                errors.email?.type === 'required' && 'Email is required' ||
                errors.email?.type === 'pattern' && 'Email is invalid'
            }
            />
            <Form.Input 
            defualtvalues=''
            placeholder='Password'
            type="password"
            {...register('password',{required: true})}
            error={errors.password && 'Password is required'}
            />
            <Button
            loading={isSubmitting}
            disabled={!isValid || !isDirty || isSubmitting}
            type='submit'
            fluidsize='large'
            color='teal'
            content='Login'
            />
        </Form>
    </ModalWrapper>
  )
}