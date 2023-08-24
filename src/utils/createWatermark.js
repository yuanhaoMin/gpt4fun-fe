import { computed } from "vue";

export default function createWaterMark(props) {
    return computed(() => {
        const canvas = document.createElement("canvas");
        // 显示倍率
        const dpr = window.devicePixelRatio || 1;
        const fontSize = props.fontSize * dpr / 1.5;
        const font = fontSize + "px serif";
        // 画板对象
        const ctx = canvas.getContext("2d");
        // 获取文字的宽度
        ctx.font = font;
        const { width } = ctx.measureText(props.text);
        const canvasSize = Math.max(200, width) + props.gap * dpr;
        // 设置画板大小
        canvas.width = canvasSize ;
        canvas.height = canvasSize;

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((Math.PI / 180) * -23); // 倒序旋转-45°
        ctx.fillStyle = "rgba(200,200,200,0.05)";
        ctx.font = font;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(props.text, 0, 0);
        return {
            base64: canvas.toDataURL(),
            size: canvasSize,
            styleSize: canvasSize / dpr,
        };
    });
}