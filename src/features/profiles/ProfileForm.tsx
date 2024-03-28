import { FieldValues, useForm } from "react-hook-form";
import { useFirestore } from "../../app/hooks/firestore/useFirestore"
import { Profile } from "../../app/model/profile";
import { updateProfile } from "firebase/auth";
import { auth } from "../../app/config/firebase";
import { Form } from "react-router-dom";
import { Button, Input, TextArea } from "semantic-ui-react";
type Props = {
    profile: Profile
    setEditMode: (value: boolean) => void
}

export default function ProfileForm({profile,setEditMode}: Props) {
  const {update} = useFirestore('profiles');
  const {register, handleSubmit, formState: {isSubmitting,isDirty,isValid}} = useForm({
    mode: 'onTouched',
    defaultValues: {
        displayName: profile.displayName,
        description: profile.description
    }
  })

  async function onSubmit(data: FieldValues){
    await update(profile.id, data);
    if(profile.displayName !== data.displayName){
        await updateProfile(auth.currentUser!, {
            displayName: data.displayName
        })
        
    }
    setEditMode(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
        placeholder='DisplayName'
        {...register('displayName',{required:true})}
        />
        <TextArea 
        placeholder='Tell us about youtself'
        {...register('description',{required:true})}
        />
        <Button 
        loading={isSubmitting}
        disabled={isSubmitting || !isValid || !isDirty}
        floated="right"
        type="submit"
        size="large"
        positive
        content='Update profile'
        />

    </Form>
  )
}


