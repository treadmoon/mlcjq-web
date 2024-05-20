import React from "react";
import { setToken } from "../../utils/token";
import { postAdminLogin } from "../../request/api/admin";
import { createCategory } from "../../request/api/category";
import { createArticle } from "../../request/api/articles";

function Admin(props) {
  const loginAdmin = async function () {
    const admin = await postAdminLogin({
      email: "mlvae@qq.com",
      password: "ml1321233272",
    });
    console.log("admin", admin);
    const token = admin && admin.token;
    setToken(token);
  };

  const addCategory = async function () {
    const category = await createCategory({
      name: "Vue",
      key: "Vue",
    });
    console.log("category", category);
  };

  const addArticle = async function () {
    /**
     * 参数
     *  title description img_url content seo_keyword  status  sort_order  browse
     * favorite_num  admin_id  category_id  created_at  updated_at deleted_at
     */
    const article = await createArticle({
      title: "如何入门React", //文章标题	是
      description: "如何5分支入门React", //	文章简介	是
      content: "如何5分支入门React？5分钟不够，花时间看官方文档！", //	文章内容	是
      img_url: "https://cn.vitejs.dev/logo.svg", //	文章封面	是
      category_id: "2", //文章分类	是
      browse: 99, //文章浏览数
      seo_keyword: "React study",
      admin_id: "1",
    });
    console.log("article", article);
  };

  return (
    <div>
      <button onClick={loginAdmin}>login admin</button>
      {/* <button onClick={addCategory}>add category</button> */}
      <button onClick={addArticle}>add addArticle</button>
    </div>
  );
}

export default Admin;
