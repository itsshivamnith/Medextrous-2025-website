import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>

        
        <div className="card-details">
          <h3 className="title-link">{data.title}</h3>
          {data.description && <p>{data.description}</p>}

         
          {caption && (
            <Link href={`${path}/${data.id}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}

        
          {show && (
            <ul>
              {Array.isArray(data.desc) &&
                data.desc.map((item, i) => <li key={i}> - {item.text}</li>)}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};


