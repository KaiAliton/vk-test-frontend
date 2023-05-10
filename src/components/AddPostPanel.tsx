import React, {ChangeEvent, useState} from "react";
import useAxios from "../utils/useAxios.ts";

export default function AddPostPanel() {
  const [postCoverUrl, setPostCoverUrl] = useState<string | undefined>(undefined);
  const [postCover, setPostCover] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const api = useAxios();
  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    setPostCoverUrl(URL.createObjectURL((e.target as any).files[0]));
    setPostCover((e.target as any).files[0]);
    setError(null);
  };

  const removeCover = () => {
    setPostCoverUrl(undefined);
    setPostCover(null);
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    (e.target as any).submit.disabled = true;
    const formdata = new FormData();
    if (!postCover && !(e.target as any).body.value) {
      setError("Заполните все поля!");
      (e.target as any).submit.disabled = false;
      return;
    }
    console.log(e.target);
    formdata.append("body", (e.target as any).body.value);
    if (postCover) {
      formdata.append("cover", postCover);
    }
    console.log("testing add post");
    console.log(formdata);
    const response = await api.post(`/api/v1/post/`, formdata);
    console.log(response);
    if (response.statusText == "Created") {
      window.location.reload();
    }
    (e.target as any).submit.disabled = false;
    console.log(response);
  };

  return (
    <div className={`w-full rounded-xl mb-5`}>
      <form method="POST" onSubmit={createPost}>
        <div className="w-full outline outline-1 outline-accent  rounded-xl bg-primary ">
          <div className="px-4 py-2 bg-primary rounded-t-xl ">
            <textarea
              id="comment"
              name="body"
              className="w-full px-0 text-sm bg-primary  border-0 focus:ring-0 "
              placeholder="Напишите что-нибудь, это поле можно оставить пустым."
            />
          </div>
          <p className="text-red-500">{error}</p>
          {postCover ? (
            <div className="relative w-fit m-3">
              <img src={postCoverUrl} alt="" className="w-32" />
              <button
                className="absolute top-0 right-0 bg-slate-100"
                onClick={removeCover}
              >
                <svg
                  height="10px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="10px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
              </button>
            </div>
          ) : null}
          <div className="flex items-center justify-between px-3 py-2 border-accent border-t  rounded-b-xl bg-primary">
            <input
              type="submit"
              value="Создать пост"
              name="submit"
              className="disabled:bg-accent/20 btn btn-sm btn-accent"
            />
            <div className="flex pl-0 space-x-1 sm:pl-2">
              <label htmlFor="cover" className=" cursor-pointer">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <input
                  type="file"
                  id="cover"
                  name="cover"
                  accept="image/*"
                  onChange={handleChange}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    return (e.target as any).value = null;
                  }}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
