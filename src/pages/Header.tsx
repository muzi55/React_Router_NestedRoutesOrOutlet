import React from "react";
import { Link } from "react-router-dom";
const Header = (): JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/join">회원가입</Link>
          </li>
          <li>
            <Link to="/test">테스트</Link>
          </li>
          <li>
            <Link to="/detail">디테일</Link>
          </li>
          <li>
            <Link to="/about">어바웃</Link>
          </li>
          <li>
            <Link to="/about/location">로케이션</Link>
          </li>
          <li>
            <Link to="/about/member">멤버</Link>
          </li>
          <li>
            <Link to="/about/etc">ETC</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
