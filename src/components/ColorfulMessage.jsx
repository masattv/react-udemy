export const ColorfulMessage = (props) => {
    console.log("--ColorfulMessage--"); // App再レンダリング時にもレンダリングされる
    const { color, children } = props;
    const contentStyleA = {
        color,
        fontSize: "18px",
    };

    return(
        <p style={contentStyleA}>{children}</p>
    )
}