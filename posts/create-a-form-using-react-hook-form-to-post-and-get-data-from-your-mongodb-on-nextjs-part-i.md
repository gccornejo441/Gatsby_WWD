---
title: 'Create a form using React Hook Form to POST and GET data from your MongoDB on Next.js: Part I'
date: 'January 12, 2022'
excerpt: 'Form Creation and Validation'
cover_image: '/images/posts/img2.jpg'
alt: 'Online credit card form'
image_title: 'Online credit card form'
image_description: 'Designed by Alex Nikiforov on Dribbble'
---
## Part I: Form Creation and Validation

Forms play a vital role in how we communicate with web apps. They are used to authenticate users, send messages to people across the web, and are often used to complete long and tedious surveys, which claim upon completion a $10 gift card to Amazon.

Today we'll be creating an easy breezy form using TypeScript, React, Next.js, Yup, and React Hook Form. You might be tempted to stop reading at this point, given the number of different technologies I named off. It's important to remember the vital role forms play in our web apps. Employing a React form library, we can forego all the performance issues that stem from React-controlled components and focus on seamless form handling.

To get started, create a TypeScript project using

```javascript
"yarn create next-app --- typescript"
```

Then, give your app an appropriate name, we'll go ahead and call our app "form-app."

![](https://miro.medium.com/max/1050/1*61jYC49yYYDt95Wi9WrIfg.png)

Next, let's focus on importing the libraries we'll use to validate and facilitate our form. Open up your terminal and execute the following commands:

![](https://miro.medium.com/max/1050/1*jgeOO3AQy5kEog0Jt0Km9A.png)

Additionally, I recommend installing TailwindCSS to quickly dress up your form, as it's my preferred CSS library, but I'll leave that up to you.

Now that you have styled your form, we'll go ahead and add the necessary functions. Using a custom hook from React Hook Form used to manage forms, called useForm, we'll call two methods. One is Register, which registers an input, and another function called handleForm that we'll invoke using the inline onSubmit event attribute.


```javascript
type FormValues = {
 b: number;
 x: number;
}

const { register, handleSubmit } 
= useForm<FormValues>({ 
  // useForm arguments
}); 


//  For TypeScript use SubmitHandler

const onSubmit: SubmitHandler<
FormValues> = (data) => {
  let exporesult: number = 
  data.b ** data.x;
  console.log(exporesult);
}
```

Barebones, your form will appear as follows:

```javascript
<form onSubmit={handleSubmit(onSubmit)>
  <input{...register("b")} />
  <input{...register("x")} />
  <input type="submit" />
</form>
```

And that's it. That's all it takes to implement a form using the React form library, React Hook Form. However, let's tighten up the form by adding validation checks.

First, create your validation schema using Yup's object method.

```javascript
import { object, number } from 'yup';
// Validationware
const validationSchema = object({
  b: number().required(),
  x: number().required(),
});
```

React Hook Form comes with custom schema validation support for not just Yup, but Zod, Superstruct, and Joi. Using the useForm argument resolver, we can integrate the yupResolver method and pass our validation schema. Furthermore, use the formState function to access any validation errors.

```javascript
const { register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({
  resolver: yupResolver(validationSchema),
});
```

Implementing validation warnings is a piece of cake as well,

```javascript
<form onSubmit={handleSubmit(onSubmit)>/
  <input{...register("b")} />
   <p 
   className="text-red-500 text-sm">
   {errors.b?.message}
   </p>
  <input{...register("x")} />
   <p 
   className="text-red-500 text-sm">
   {errors.x?.message}
   </p>
  <input type="submit" />
</form>
```

