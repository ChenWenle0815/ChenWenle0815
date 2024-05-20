import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { debounce } from "lodash";

import { Button } from "antd";

const ReactQuillEditor = () => {
	const [value, setValue] = useState("初始值");
	const editorRef = useRef(null);

	// 自定义工具栏
	const modules = {
		// 方式1: 可以是简单的一维数组配置
		// toolbar: ["bold", "italic", "underline", "strike", "blockquote"]
		// 方式2: 可以配置二维数组，进行多个选项的配置
		// 或者针对某一个配置项的key值，进行配置
		toolbar: [
			// 默认的
			// [{ header: [1, 2, 3, false] }],
			// ["bold", "italic", "underline", "link"],
			// [{ list: "ordered" }, { list: "bullet" }],
			// ["clean"]
			// 掘金的富文本编辑器
			"bold",
			"italic",
			"underline",
			{ header: 1 },
			{ header: 2 },
			"blockquote",
			"code-block",
			"code",
			"link",
			{ list: "ordered" },
			{ list: "bullet" },
			"image"
		]
		// 方式3: 可以自己指定工具栏的容器
		// toolbar: "#rq-toolbar"
	};

	// 剩下参数 delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor
	const handleChangeValue = debounce((value: string, delta: any, source: any, editor: any) => {
		console.log("handleChangeValue-->", value, delta, source, editor);
		setValue(value);
	}, 500);

	const handleGetEditor = () => {
		console.log("编辑器实例：", editorRef?.current?.getEditor());
	};

	return (
		<div className="react-quill-wrap">
			<h2 className="title">富文本编辑器</h2>
			<div className="quill-editor-wrap">
				{/* 自定义的工具栏 */}
				{/* <div className="quill-editor-toolbar" id="rq-toolbar">
					<button className="ql-bold"></button>
					<button className="ql-italic"></button>
				</div> */}
				<ReactQuill
					theme="snow"
					// className="editor-area"
					style={{ borderRadius: "10px" }}
					placeholder="我是富文本编辑器的提示信息"
					preserveWhitespace
					// defaultValue="<strong>我是默认值</strong>"
					// readOnly
					modules={modules}
					ref={editorRef}
					value={value}
					onChange={handleChangeValue}
					onChangeSelection={range => {
						console.log("onChangeSelection--->", range);
					}}
					onFocus={range => {
						console.log("onFocus--->", range);
					}}
					onBlur={previousRange => {
						console.log("onBlur--->", previousRange);
					}}
				/>
				{/* 自定义编辑区域 */}
				{/* <h2 className="title">自定义编辑区域</h2> */}
				{/* <ReactQuill
					theme="snow"
					// modules={modules}
					value={value}
					onChange={handleChangeValue}
				>
					<div className="editor-area"></div>
				</ReactQuill> */}
			</div>
			<Button onClick={handleGetEditor}>获取编辑器实例</Button>
		</div>
	);
};

export default ReactQuillEditor;

