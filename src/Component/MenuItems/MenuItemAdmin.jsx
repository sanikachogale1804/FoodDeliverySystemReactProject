import { deleteMenuItems, getMenuItemsById } from "../Services/MenuItemsService";

function MenuItemAdmin({ name, price, description, image ,menu_link,OnSelectMenuItem,onSelectDelete,onDeleteMenuItem}) {

    const onSelectUpdate=async (link)=>{
      //console.log(link);
      let menuItem =await getMenuItemsById(link);
      OnSelectMenuItem(menuItem)

    }

    onSelectDelete=async(menuItem_link)=>{
      const deletedMenuItems=await deleteMenuItems(menuItem_link)
      onDeleteMenuItem();
    }

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
            <a href="#" className="btn btn-primary btn-lg menu-btn">View Details</a>
            <a href="#" className="btn btn-primary btn-lg menu-btn1" onClick={()=>{onSelectUpdate(menu_link) }}>Update</a>
            <a href="#" className="btn btn-primary btn-lg menu-btn2" onClick={()=>{onSelectDelete(menu_link)}}>Delete</a>
            

          </div>
        </div>
      </div>
  
    )
  }
  
  export default MenuItemAdmin
  