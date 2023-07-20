import React from "react";

import "./Cast.scss";

import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import Img from "../../../components/LazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import useConfig from "../../../hooks/useConfig";

interface Props {
  loading: boolean;
  data: any[];
}

const Cast = ({ data, loading }: Props) => {
  const { data: urls } = useConfig("/configuration");

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data.map((item) => (
              <div key={item.id} className="listItem">
                <div className="profileImg">
                  <Img
                    src={
                      item.profile_path
                        ? urls.profile + item.profile_path
                        : avatar
                    }
                  />
                </div>
                <div className="name">{item.name}</div>
                <div className="character">{item.character}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
