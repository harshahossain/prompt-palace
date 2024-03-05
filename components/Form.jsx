import Link from "next/link";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {" "}
        {type} and share amazing prompts, and let your imagination run wild with
        every AI-powered platform.{" "}
      </p>
      {/* actual form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl 
      flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-semibold font-satoshi text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label htmlFor="">
          <span className="font-semibold font-satoshi text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              {" "}
              #product #webdevelopment, #image, #idea
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>
      </form>
    </section>
  );
}
//have to work on it later
