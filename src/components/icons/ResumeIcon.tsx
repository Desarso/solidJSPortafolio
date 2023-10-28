type Props = {
  fill?: string;
  className: any;
  width?: number;
};

function ResumeIcon({ fill = "#28282b", className, width }: Props) {
  return (
    <svg
      width={width}
      height={width}
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill={fill}
    >
      <title>Download Resume</title>
      <g id="CV">
        <path
          d="M55.707,11.293l-10-10A1.115,1.115,0,0,0,45,1H9A1,1,0,0,0,8,2V62a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V12A1.092,1.092,0,0,0,55.707,11.293ZM52.586,11H46V4.414ZM10,61V3H44v9a1,1,0,0,0,1,1h9V61Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M34,8h7a1,1,0,0,0,0-2H34a1,1,0,0,0,0,2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M34,13h7a1,1,0,0,0,0-2H34a1,1,0,0,0,0,2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,16H34a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,21H34a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,26H34a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,31H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,36H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,41H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,46H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,51H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M50,56H14a1,1,0,0,0,0,2H50a1,1,0,0,0,0-2Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M22,19a5,5,0,1,0-5-5A5.006,5.006,0,0,0,22,19Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,22,11Z"
          //   style={`fill:${fill}`}
        />
        <path
          d="M14,28H30a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1V27A1,1,0,0,0,14,28Zm1.473-2a7.325,7.325,0,0,1,13.054,0ZM29,8V23.164a9.325,9.325,0,0,0-14,0V8Z"
          //   style={`fill:${fill}`}
        />
      </g>
    </svg>
  );
}

export default ResumeIcon;
