import { useForm } from "react-hook-form";
import { useProducts } from "../context/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createProduct, getProduct, updateProduct } = useProducts();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProduct() {
      if (params.code) {
        const product = await getProduct(params.code);
        console.log(product);
        setValue("code", product.code);
        setValue("name", product.name);
      }
    }
    loadProduct();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.code) {
        updateProduct(params.code, data);
        alert("Update OK!");
      } else {
        createProduct(data);
        alert("Create OK!");
      }
      navigate("/products");
    } catch (error) {
      console.error("Failed to create product", error);
    }
  });

  return (
    <div className="flex items-center justify-center py-10">
      <div className="bg-zinc-300 max-w-md w-full p-10 rounded-sm">
        <h1 className="text-2xl font-bold mb-4">
          {params.code ? "Update Product" : "Create Product"}
        </h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="code">Code: </label>
          <input
            type="number"
            placeholder="Code"
            {...register("code", {
              required: "Code is required",
              pattern: {
                value: /^\d{4}$/,
                message: "Code must be exactly 4 digits",
              },
            })}
            className="w-full bg-zinc-100 text-black px-4 py-2 rounded-sm my-2"
            autoFocus
          />
          {errors.code && <p className="text-red-500">{errors.code.message}</p>}
          <label htmlFor="name">Name: </label>
          <textarea
            rows="3"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full bg-zinc-100 text-black px-4 py-2 rounded-sm my-2"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <button className="w-full bg-green-500 px-3 py-2 rounded-sm">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductFormPage;
