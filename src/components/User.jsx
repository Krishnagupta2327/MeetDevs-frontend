export const User = ({user})=>{
  // console.log(343);
  // console.log(user);
    // const {firstName, lastName, age  } = user;
    {console.log(878)}
    {console.log(user);}
    return (
        
        <div className="card bg-base-100 w-96 shadow-sm my-40">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {user && user.firstName+" " + user.lastName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inhiside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
}