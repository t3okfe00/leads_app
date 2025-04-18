import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  website: z.preprocess((val) => {
    if (typeof val === "string" && val.trim() !== "") {
      return val.startsWith("http") ? val : `https://${val}`;
    }
    return val;
  }, z.string().url().optional()),
  phone: z
    .string()
    .regex(/^\+?\d{7,}$/, "Invalid phone number")
    .optional(),
  email: z.string().email().optional(),
});

export default function AddCompanyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitting:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md border-2 border-gray-200"
    >
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          {...register("name")}
          id="companyName"
          placeholder="Company Name"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          {...register("address")}
          id="address"
          placeholder="Address"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="website">Website</label>
        <input
          {...register("website")}
          id="website"
          placeholder="Website"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.website && (
          <p className="text-red-500 text-sm">{errors.website.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          {...register("phone")}
          id="phone"
          placeholder="Phone"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          id="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Company
      </button>
    </form>
  );
}
