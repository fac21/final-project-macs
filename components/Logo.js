export default function Logo(props) {
        return (
      <>
        <css-doodle click-to-update>{
          `
          :doodle {
            @grid: 8 / 90%;
            @shape: circle;
            width: ${props.size}em; height: ${props.size}em;
            background-color: ${props.bg};
          }
          
          transition: .2s @r(.6s);
          clip-path: @pick(polygon(0% 0%, 100% 0%, 100% 75%, 87% 75%, 100% 100%, 35% 75%, 0% 75%), polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 0 100%, 13% 75%, 0% 75%));
          
          will-change: transform;
          transform: scale(@r(.25, 1.25));
          
          background: hsla(
            calc(240 - 6 * @x * @y),
            70%, 68%, @r.8
          );
          `
        }</css-doodle>
                </>
  
    );
  }