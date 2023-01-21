export type BreadcrumbItemsType = {
  url: string;
  title: string;
};

export type BreadcrumbPropsType = {
  items: BreadcrumbItemsType[];
};
function Breadcrumb(props: BreadcrumbPropsType) {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-breadcrumb">
                <ol className="breadcrumb">
                  {props.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
