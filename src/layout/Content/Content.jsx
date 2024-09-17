import "./Content.css"
import ContentTop from "../../components/contentTop/ContentTop";
import ContentMain from "../../components/contentMain/ContentMain";
const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content