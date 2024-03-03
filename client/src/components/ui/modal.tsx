import { useForm } from "react-hook-form";
import { DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { userDataSchema } from "@/schemas/user-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
const Modal = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      name: "",
      location: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof userDataSchema>) {
    console.log(values);
    setisLoading(true);
    try {
      const res = await axios.post("https://user-records-node.onrender.com/createUser", {
        values,
      });

      if (res.data.error) {
        return toast.success(res.data.error);
      }

      form.reset();
      location.reload();
      toast.success(res.data.success);
    } catch (err) {
      console.log(err);
      toast.success("something went wrong");
    } finally {
      setisLoading(false);
    }
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New User</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Customer name..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter age..."
                      {...field}
                      value={Number(field.value)}
                      onChange={field.onChange}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type location"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone number ..."
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-emerald-600"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        </Form>
      </DialogHeader>
    </DialogContent>
  );
};

export default Modal;
