import React from "react";

function Header() {
  return (
    <div className="flex sticky top-0 bg-white justify-between">
      <div>
        <input type="text" placeholder="search anything..." />
      </div>

      <div>
        {/*  */}
        {/*  */}
        <div>
          <div></div>
          <div>
            <div>Anna Ogunyemi</div>
            <div>Super admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
