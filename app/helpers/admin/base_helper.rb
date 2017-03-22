module Admin::BaseHelper
  def area_name
    controller_name == "static_pages" ? action_name : controller_name
  end
  
  def page_header
    headers = {"users" => t(".users"), "index" => t(".dashboard")}
    headers[area_name]
  end
end 
