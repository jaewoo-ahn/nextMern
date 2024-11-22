"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    username: "",
  },
});

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProps) => {
  return <div>EventForm</div>;
};

export default EventForm;
