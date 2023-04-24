import "./websitePreviewImg.css";

export default function WebsitePreviewImg(props) {
  return (
    <div className="website-prev-img">
      <div className="website-prev-menu">
        <div className="circle"></div>
      </div>
      {props.children}
    </div>
  );
}
