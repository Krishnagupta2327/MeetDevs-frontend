export const User = ({user})=>{
  // console.log(343);
  // console.log(user);
    // const {firstName, lastName, age  } = user;
    {console.log(878)}
    {console.log(user);}
    return (
        
        <div className="card bg-base-100 w-96 shadow-sm my-10">
  <figure>
    <img
      src={user&& user.imgUrl} />
  </figure>
  {user && <div className="card-body">
    <h2 className="card-title">
      {user.firstName+" " + user.lastName}
      <div className="badge badge-secondary">{user.age}</div>
    </h2>
    <h3 className="text-left">📍{user.city}</h3>
    <p>{user.about}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Send Request</div>
      <div className="badge badge-outline">Ignore</div>
    </div>
  </div>}
</div>
    );
}