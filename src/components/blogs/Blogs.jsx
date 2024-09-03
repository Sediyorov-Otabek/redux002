import { Button } from "antd";

import React, { useEffect, useState } from "react";
import { Close } from "../close/Close";
import axios from "../../api/index";

const Blogs = ({ data }) => {
  const [blogs, setBlogs] = useState(null);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setBlogs(data);
  }, [data, reload]);
  const [show, setShow] = useState(false);

  const handleCreate = (values) => {
    let blog = {
      title: values.title,
      desc: values.desc,
    };
    axios
      .post("/blogs", blog)

      .then((res) => {
        setBlogs([...blogs, res.data.payload]);
      });
  };
  const handlDelete = (id) => {
    console.log(id);
    axios.delete(`/blogs/${id}`).then((res) => {
      setReload((p) => !p);
    });
  };
  let items = blogs?.map((blog) => (
    <div
      key={blog._id}
      className="bg-slate-100 flex flex-col items-center justify-center w-[200px] border rounded-md p-4"
    >
      <h3 className="text-lg font-[500] text-[#b10b0b99]">{blog.title}</h3>
      <p className="text-sm text-[#2adb13]">{blog.desc}</p>
      <Button
        className="bg-blue-600 text-white"
        onClick={() => handlDelete(blog._id)}
      >
        delete
      </Button>
    </div>
  ));
  return (
    <div className="container flex mx-auto  flex-col gap-6 items-center mt-8 justify-center mb-10">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {items}
      </div>
      <Button onClick={() => setShow(true)} className=" bg-blue-700 text-white">
        add description
      </Button>
      <Close show={show} setShow={setShow} handleCreate={handleCreate} />
    </div>
  );
};

export default Blogs;
