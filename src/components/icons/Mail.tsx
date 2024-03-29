type Props = {};

function Mail({}: Props) {
  return (
    <svg
      class="social-svg icon"
      style="border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%;fill-rule:evenodd"
      viewBox="0 0 64 64"
    >
      <g
        class="social-svg-background"
        style="-ms-transition:fill 170ms ease-in-out;-o-transition:fill 170ms ease-in-out;-moz-transition:fill 170ms ease-in-out;-webkit-transition:fill 170ms ease-in-out;transition:fill 170ms ease-in-out;fill:transparent"
      >
        <circle cx="32" cy="32" r="31"></circle>
      </g>
      <g
        class="social-svg-icon"
        style="-ms-transition:fill 170ms ease-in-out;-o-transition:fill 170ms ease-in-out;-moz-transition:fill 170ms ease-in-out;-webkit-transition:fill 170ms ease-in-out;transition:fill 170ms ease-in-out;"
      >
        <path d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"></path>
      </g>
      <g
        class="social-svg-mask"
        style="-ms-transition:fill 170ms ease-in-out;-o-transition:fill 170ms ease-in-out;-moz-transition:fill 170ms ease-in-out;-webkit-transition:fill 170ms ease-in-out;transition:fill 170ms ease-in-out;fill:transparent"
      >
        <path d="M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z"></path>
      </g>
    </svg>
  );
}

export default Mail;
