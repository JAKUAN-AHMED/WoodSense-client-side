import Swal from "sweetalert2";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const AddCraftItem = () => {
  const handleAddItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_Name = form.subcategory_Name.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const userEmail = form.User_Email.value;
    const userName = form.User_Name.value;

    const CategoryItems = {
      image,
      item_name,
      subcategory_Name,
      processing_time,
      stockStatus,
      short_description,
      price,
      rating,
      customization,
      userEmail,
      userName,
    };
    console.log(CategoryItems);
    //send items to database
    fetch("http://localhost:3010/items",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(CategoryItems)
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.acknowledged) {
          Swal.fire({
            title: "Successfully Inserted",
            icon: "success",
          })
        }
        form.reset();
        
    })
  };

  return (
    <div className="font-popins">
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mt-24 mb-8 border rounded shadow-md overflow-hidden">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Add <span className="text-yellow-400">Your</span> Crafts
            </h1>
            <p className="py-6">
              Fill out the form below to add a new craft item to our collection
              <br />
              ensuring all details are accurate to help showcase your unique art
              and craft creation.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleAddItems} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Item Name"
                  name="item_name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <select
                  name="subcategory_Name"
                  className="border-2 border-black rounded shadow-md"
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Wooden Furniture & Sculptures">
                    Wooden Furniture & Sculptures
                  </option>
                  <option value="Wooden Home Decor">Wooden Home Decor</option>
                  <option value="Wooden Utensils and Kitchenware">
                    Wooden Utensils and Kitchenware
                  </option>
                  <option value="Jute Home Decor">Jute Home Decor</option>
                  <option value="Jute Kitchenware & utensils">
                    Jute Kitchenware & utensils
                  </option>
                  <option value="Jute and wooden jewellery">
                    Jute and wooden jewellery
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder="description"
                  className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                  name="short_description"
                  type="text"
                ></textarea>
                {/* md */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <select
                  name="customization"
                  className="border-2 border-black rounded shadow-md"
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <select
                  name="stockStatus"
                  className="border-2 border-black rounded shadow-md"
                  required
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="In Stock">In Stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  type="text"
                  name="processing_time"
                  className="input input-bordered"
                  placeholder="Processing Time"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="User_Email"
                  className="input input-bordered"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="User_Name"
                  className="input input-bordered"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-square w-full h-10 bg-yellow-400 text-black text-base">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddCraftItem;
