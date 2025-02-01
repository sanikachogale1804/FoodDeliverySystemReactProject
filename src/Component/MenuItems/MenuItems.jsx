import { useNavigate } from "react-router-dom"

function MenuItems({ id,name, price, description, image }) {
const navigate=useNavigate()
 
  return (

    <div className="Item-container col-md-6 mb-4">
      <div className="card menu-card ">
        <img
          src={`${image}/image`}
          className="card-img-top menu-img"
          alt={`Food item: ${name}`}
        />
        <div className="card-body">
          <h5 className="card-title menu-name">{name}</h5>
          <p className="card-text menu-price">{price}</p>
          <p className="card-text menu-description">
            <small className="text-muted">{description}</small>
          </p>
          <button href="#" className="btn btn-primary btn-lg menu-btn" >View Details</button>
          

          
        </div>
      </div>
    </div>

  )
}

export default MenuItems
