import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstname: yup
    .string()
    .required('firstname required')
    .min(3, 'too short')
    .max(20, 'too long'),
  lastname: yup
    .string()
    .required('lastname required')
    .min(3, 'too short')
    .max(20, 'too long'),
  file: yup
    .object({
      name: yup.string().required().typeError('file require')
    })
    .required()
    .typeError('file require')
});
interface AnyObj {
  [key: string]: any;
}
type Input = yup.InferType<typeof schema>;

const style: AnyObj = { color: 'red' };

export const ChooseFile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Input>({
    resolver: yupResolver(schema)
  });

  const getBase64: any = (file: any) => {
    return new Promise((resolve) => {
      //let fileInfo: any;
      let baseURL: string | any;
      // Make new FileReader
      const reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log('Called', reader);

        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };
  const onSubmit = async (data: any) => {
    // console.log(data);
    if (data?.file) {
      const file = data?.file[0];
      //console.log(file?.type);
      await getBase64(file)
        .then((result: any) => {
          const str: string | any = result.split(',')[1];
          file['base64'] = str;
          //console.log("File Is", file);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
    console.log(data);
  };

  return (
    <div>
      <div>ChooseFile</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="firstname..." {...register('firstname')} />
        <br />
        {errors?.firstname && <p style={style}>{errors?.firstname?.message}</p>}
        <input placeholder="lastname..." {...register('lastname')} />
        <br />
        {errors?.lastname && <p style={style}>{errors?.lastname?.message}</p>}
        <input
          type="file"
          placeholder="file..."
          {...register('file', { required: true })}
        />
        {errors?.file && (
          <p style={style}>{errors?.file?.message?.toString()}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
