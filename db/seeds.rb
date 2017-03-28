CatalogueForm.create name: "Objective", hint_title: "", hint_content: "Your objective"
CatalogueForm.create name: "Education", hint_title: "University", hint_time: "From - To",
  hint_content: "- Degree and Field of study - gpa"
CatalogueForm.create name: "Work experience", hint_title: "Company name",
  hint_time: "From - To",
  hint_content: "- Title / Position \
  - Description about your responsibilities and the results of your work"
CatalogueForm.create name: "Activities", hint_title: "Organization name",
  hint_time: "From - To",
  hint_content: "- Title \
  - Description"
CatalogueForm.create name: "Skills", hint_title: "Skill name",
  hint_content: "Skill description"
CatalogueForm.create name: "Interests", hint_title: "",
  hint_content: "I like soccer, music, etc ..."
CatalogueForm.create name: "Certifications", hint_title: "Certification, ...", hint_time: "From - To",
  hint_content: "Certificate name"
CatalogueForm.create name: "Honors & Awards", hint_time: "From - To",
  hint_title: "Award, ...", hint_content: "Award name"
CatalogueForm.create name: "Projects", hint_title: "Project name",
  hint_time: "From - To",
  hint_content: "- Work description \
  - Team work\
  - Your position in team"
CatalogueForm.create name: "References", hint_title: "", hint_content: ""

Template.create name: "Template 1", content: "template1"
Template.create name: "Template 2", content: "template2"

User.create first_name: "vinh", email: "vinh@gmail.com", password: 123456
User.create first_name: "Nguyen", last_name: "Thanh", date_of_birth: "13/3/2003",
  phone_number: "0123498372", sex: "male", email: "thanh@framgia.com",
  password: "000000", password_confirmation: "000000"
User.create email: "admin@cv.framgia.vn", first_name: "Admin", last_name: "Nguyen",
  phone_number: "0987654321", password: "admin0", password_confirmation: "admin0", role: "admin"
