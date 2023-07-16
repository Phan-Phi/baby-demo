import { useRouter } from "next/router";
import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

export default function HomeCourseIcon2(props: SvgIconProps) {
  const { locale } = useRouter();

  if (locale === "en") {
    return (
      <SVGIconBase
        {...props}
        viewBox="0 0 238 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1797 25.9648C9.55859 25.9648 6.48242 24.7168 3.93359 22.2031C1.40234 19.6895 0.136719 16.6309 0.136719 13.0625C0.136719 9.47656 1.40234 6.41797 3.93359 3.88672C6.48242 1.33789 9.4707 0.0722656 12.9336 0.0722656C16.3965 0.0722656 18.9453 0.810547 20.5801 2.26953C22.2324 3.72852 23.0938 5.15234 23.1816 6.52344V6.80469C23.1816 8.70312 22.1621 10.1973 20.123 11.2695C19.6836 11.6035 18.998 11.7969 18.0664 11.8848L17.8203 11.3926C17.416 10.6719 16.8184 10.0566 16.0273 9.58203C15.2363 9.10742 14.3926 8.86133 13.4961 8.86133C12.1074 8.86133 10.9297 9.30078 9.96289 10.1973C9.01367 11.0938 8.53906 12.1484 8.53906 13.3965C8.53906 14.627 9.03125 15.6992 9.99805 16.5957C10.9648 17.4922 12.125 17.9316 13.4961 17.9316C13.9355 17.9316 14.3574 17.8789 14.7969 17.791L14.6914 13.4316C15.9922 12.9219 17.4512 12.6758 19.0859 12.6758C20.6855 12.6758 21.9688 12.9043 22.918 13.3613C23.8672 13.8184 24.3418 14.4512 24.3418 15.2773V19.2676L24.1484 26.1406C23.3926 27.1426 22.1797 27.6523 20.5273 27.6523C17.9434 27.6523 16.2559 27.0547 15.4824 25.8594C14.6914 25.9297 13.9355 25.9648 13.1797 25.9648ZM36.0664 0.0722656C43.959 0.0722656 47.9141 2.97266 47.9141 8.79102C47.9141 11.6211 47.1758 13.7305 45.7168 15.084C45.6289 15.1367 45.5762 15.2598 45.5762 15.418C45.5762 15.998 46.1914 17.3516 47.4043 19.4434C48.6348 21.5352 49.25 22.6074 49.25 22.6602C49.1621 23.6621 48.5469 24.4883 47.4219 25.1035C46.2969 25.7363 45.0488 26.0527 43.6602 26.0703C42.1309 26.0703 40.8652 25.3145 39.8633 23.7852C39.3887 23.082 39.002 22.4492 38.7031 21.8867C38.3867 21.2715 38.1055 20.6387 37.8594 19.9531C37.5957 19.2148 37.4551 18.8457 37.4375 18.8281H35.5215V24.7695C34.9062 25.5957 33.4297 26 31.0566 26C29.334 26 28.0684 25.543 27.2598 24.6289C26.4688 23.6973 26.0645 22.5723 26.0645 21.2188L25.9062 2.42773C25.9062 1.98828 27.1895 1.49609 29.7734 0.933594C32.3223 0.353516 34.4316 0.0722656 36.0664 0.0722656ZM36.5059 12.6055C38.5449 12.6055 39.5645 11.7266 39.5645 9.95117C39.5645 8.29883 38.7383 7.47266 37.0684 7.45508C36.1719 7.45508 35.5039 7.63086 35.0645 8V12.2539C35.1875 12.4824 35.6797 12.6055 36.5059 12.6055ZM62.7324 0.0722656C64.5605 0.0722656 66.1953 0.494141 67.6543 1.33789C69.1484 2.19922 70.3262 3.0957 71.1523 3.99219C72.0312 4.92383 72.752 6.18945 73.332 7.75391C73.9121 9.35352 74.2109 11.1113 74.2109 13.0625C74.2109 15.0488 73.9297 16.8066 73.3496 18.3535C72.7695 19.9355 72.0488 21.1836 71.2051 22.0977C70.3438 23.0293 69.166 23.9258 67.6895 24.752C66.1953 25.5781 64.543 26 62.7324 26C60.2539 26 58.3555 25.6836 57.0371 25.0684C55.7539 24.4531 54.2598 23.416 52.5547 21.957C50.8672 20.498 50.0234 17.2637 50.0234 12.2539C50.0234 8.66797 51.2012 5.75 53.5742 3.48242C55.9473 1.21484 59.0059 0.0722656 62.7324 0.0722656ZM62.3984 8.82617C61.291 8.82617 60.3418 9.21289 59.5859 9.96875C58.8477 10.7246 58.4785 11.6562 58.4785 12.7812C58.4785 14.8906 58.9355 16.209 59.8496 16.7188C60.7461 17.2285 61.5195 17.4746 62.1348 17.4746C62.75 17.4746 63.2949 17.3691 63.7871 17.1582C64.2793 16.9297 64.7539 16.4551 65.2109 15.7695C65.668 15.0664 65.8965 14.082 65.8965 12.8164C65.8965 11.5508 65.4922 10.5664 64.7012 9.88086C63.9102 9.17773 63.1543 8.82617 62.3984 8.82617ZM94.1973 0.0722656C95.9199 0.0722656 97.1855 0.458984 97.9766 1.25C98.7676 2.04102 99.1543 3.32422 99.1543 5.08203L99.084 14.1172C99.0488 14.9785 98.9258 15.9102 98.6973 16.9297C98.4688 18.002 98.2051 18.8633 97.9414 19.5137C97.6953 20.1289 97.2734 20.9023 96.6582 21.8164C95.5332 23.4863 93.8809 24.6816 91.6836 25.4199C90.4531 25.8242 88.9766 26.0352 87.2363 26.0352C85.4961 26.0352 83.8438 25.7363 82.2617 25.1562C80.7148 24.5762 79.5195 23.8555 78.6934 23.0117C77.8672 22.168 77.1289 21.0078 76.4785 19.5488C75.8281 18.1074 75.5117 16.4199 75.5117 14.4863V1.05664C75.5117 1.00391 75.6875 0.916016 76.0215 0.792969C76.3379 0.669922 76.9531 0.511719 77.8496 0.353516C78.7461 0.195312 79.6953 0.107422 80.7324 0.107422C84.0547 0.107422 85.707 1.79492 85.707 5.1875L85.584 16.1738C85.584 16.8945 85.7422 17.4922 86.0586 17.9492C86.3926 18.4238 86.8496 18.6699 87.4297 18.6875C88.502 18.6699 89.0469 17.8262 89.0469 16.1738L88.9414 6.69922C88.9414 4.99414 88.959 3.07812 88.9766 0.951172C88.9766 0.757812 89.5742 0.582031 90.7871 0.388672C92 0.177734 93.1426 0.0722656 94.1973 0.0722656ZM111.055 0.0722656C118.982 0.0722656 122.938 2.97266 122.938 8.79102C122.938 11.6211 121.936 13.9941 119.914 15.9453C117.893 17.8965 115.396 18.8633 112.426 18.8633H110.545V24.8047C109.93 25.5957 108.418 26 106.045 26C104.322 26 103.057 25.543 102.248 24.6465C101.457 23.75 101.053 22.6074 101.053 21.2539L100.895 2.42773C100.895 1.98828 102.195 1.49609 104.779 0.933594C107.363 0.353516 109.455 0.0722656 111.055 0.0722656ZM111.529 12.6055C113.568 12.6055 114.588 11.7266 114.588 9.95117C114.588 8.29883 113.744 7.47266 112.057 7.45508C111.16 7.45508 110.492 7.63086 110.053 8V12.2891C110.193 12.5 110.686 12.6055 111.529 12.6055ZM153.752 6.52344V6.80469C153.752 8.70312 152.732 10.1973 150.693 11.2695C150.254 11.5684 149.568 11.7793 148.637 11.8848L148.391 11.3926C147.441 9.70508 145.982 8.86133 144.031 8.86133C142.643 8.86133 141.465 9.30078 140.498 10.1973C139.531 11.0938 139.057 12.166 139.057 13.4141C139.057 14.6621 139.531 15.7344 140.498 16.6309C141.465 17.5273 142.643 17.9668 144.031 17.9668C145.842 17.9668 147.195 17.2988 148.092 15.9629C148.602 15.7695 149.146 15.6465 149.709 15.6289C150.781 15.6289 151.66 16.0859 152.381 17.0176C153.102 17.9668 153.471 18.9863 153.453 20.0938C153.453 20.6914 153.33 21.3418 153.102 22.0449C152.188 23.5566 150.939 24.5938 149.34 25.1562C147.74 25.7188 145.859 26 143.697 26C140.094 26 137.018 24.7344 134.469 22.2207C131.938 19.707 130.672 16.6484 130.672 13.0625C130.672 9.47656 131.938 6.41797 134.469 3.88672C137 1.33789 140.076 0.0722656 143.697 0.0722656C145.086 0.0722656 146.527 0.300781 148.004 0.740234C149.428 1.17969 150.729 1.90039 151.889 2.9375C153.049 3.97461 153.664 5.16992 153.752 6.52344ZM165.336 26H163.525C160.414 26 158.463 25.6484 157.672 24.9277C156.23 23.5742 155.51 21.834 155.51 19.7422L155.246 1.37305C156.705 0.511719 158.34 0.0722656 160.15 0.0722656C161.961 0.0722656 163.42 0.458984 164.492 1.25C165.582 2.04102 166.127 3.14844 166.127 4.60742C166.127 8.66797 166.074 12.6934 165.951 16.6836C167.217 16.4902 168.535 16.4375 169.906 16.5254C170.803 17.7383 171.242 19.2324 171.242 20.9902C171.242 21.3242 171.225 21.6934 171.172 22.1152C170.873 24.6992 168.922 26 165.336 26ZM195.061 14.627L197.627 22.502C197.627 23.082 197.346 23.7148 196.766 24.4004C196.537 24.6641 196.08 24.998 195.395 25.4023C194.709 25.8066 193.742 26 192.477 26C190.262 26 188.732 24.7695 187.906 22.3262C187.695 21.7109 187.484 21.043 187.256 20.3223L186.922 19.2324L186.887 18.9512C185.463 18.6699 184.145 18.6699 182.932 18.9512C181.859 21.4824 181.297 23.1523 181.209 23.9785C181.121 24.1543 180.998 24.3477 180.822 24.541C180.629 24.8047 180.189 25.1035 179.539 25.4551C178.889 25.8242 178.115 26 177.254 26C175.795 26 174.617 25.6133 173.686 24.8574C172.771 24.084 172.314 23.1172 172.314 21.9395C172.314 21.1484 172.455 20.3574 172.719 19.5488C172.701 19.7246 174.916 13.6602 179.398 1.37305C179.768 1.07422 180.436 0.792969 181.438 0.511719C182.422 0.212891 183.758 0.0722656 185.428 0.0722656C187.098 0.0722656 188.398 0.423828 189.348 1.12695C190.297 1.79492 191.193 3.18359 192.02 5.27539C192.846 7.36719 193.531 9.37109 194.076 11.3047C194.604 13.1152 194.938 14.2227 195.061 14.627ZM184.953 8.14062L183.828 13.7656H186.359L185.463 8.10547C185.463 7.73633 185.375 7.56055 185.199 7.56055C185.111 7.57812 185.023 7.77148 184.953 8.14062ZM217.104 17.8262C217.104 20.3047 216.277 22.2559 214.643 23.6797C213.008 25.1035 210.793 25.877 207.963 26H207.682C204.887 25.9473 202.637 25.4199 200.967 24.4531C199.297 23.4688 198.453 22.2383 198.453 20.7441C198.453 19.8828 198.594 19.127 198.875 18.4941C199.174 17.8438 199.473 17.4219 199.754 17.2461L200.158 16.9648C202.812 18.1602 204.957 18.7578 206.557 18.7578C207.611 18.7578 208.156 18.4766 208.174 17.9316C208.174 17.5977 207.699 17.1758 206.768 16.7012C205.836 16.1914 204.904 15.7871 204.008 15.4883L202.602 14.9785C201.512 14.5742 200.615 14.0117 199.895 13.291C199.174 12.5703 198.646 11.6914 198.312 10.6543C197.979 9.58203 197.803 8.58008 197.82 7.61328C197.838 6.61133 198.066 5.64453 198.471 4.73047C198.91 3.78125 199.684 2.90234 200.791 2.07617C201.916 1.23242 203.199 0.6875 204.658 0.441406C206.117 0.195312 207.26 0.0722656 208.051 0.0722656C209.896 0.0722656 211.742 0.458984 213.57 1.21484C214.537 1.61914 215.311 2.2168 215.908 3.00781C216.523 3.79883 216.822 4.64258 216.822 5.53906C216.822 6.43555 216.611 7.2793 216.189 8.07031C215.785 8.87891 215.328 9.35352 214.836 9.51172C212.129 8.38672 210.072 7.82422 208.648 7.82422C207.611 7.82422 207.049 8.03516 206.926 8.43945L206.855 8.65039C206.855 8.9668 207.189 9.26562 207.875 9.54688C208.561 9.81055 209.264 10.0039 209.949 10.127L210.986 10.3027C212.129 10.6367 213.148 11.1289 214.045 11.7969C214.906 12.4473 215.645 13.3438 216.225 14.4512C216.805 15.5586 217.104 16.6836 217.104 17.8262ZM237.846 17.8262C237.846 20.3047 237.02 22.2559 235.385 23.6797C233.75 25.1035 231.535 25.877 228.705 26H228.424C225.629 25.9473 223.379 25.4199 221.709 24.4531C220.039 23.4688 219.195 22.2383 219.195 20.7441C219.195 19.8828 219.336 19.127 219.617 18.4941C219.916 17.8438 220.215 17.4219 220.496 17.2461L220.9 16.9648C223.555 18.1602 225.699 18.7578 227.299 18.7578C228.354 18.7578 228.898 18.4766 228.916 17.9316C228.916 17.5977 228.441 17.1758 227.51 16.7012C226.578 16.1914 225.646 15.7871 224.75 15.4883L223.344 14.9785C222.254 14.5742 221.357 14.0117 220.637 13.291C219.916 12.5703 219.389 11.6914 219.055 10.6543C218.721 9.58203 218.545 8.58008 218.562 7.61328C218.58 6.61133 218.809 5.64453 219.213 4.73047C219.652 3.78125 220.426 2.90234 221.533 2.07617C222.658 1.23242 223.941 0.6875 225.4 0.441406C226.859 0.195312 228.002 0.0722656 228.793 0.0722656C230.639 0.0722656 232.484 0.458984 234.312 1.21484C235.279 1.61914 236.053 2.2168 236.65 3.00781C237.266 3.79883 237.564 4.64258 237.564 5.53906C237.564 6.43555 237.354 7.2793 236.932 8.07031C236.527 8.87891 236.07 9.35352 235.578 9.51172C232.871 8.38672 230.814 7.82422 229.391 7.82422C228.354 7.82422 227.791 8.03516 227.668 8.43945L227.598 8.65039C227.598 8.9668 227.932 9.26562 228.617 9.54688C229.303 9.81055 230.006 10.0039 230.691 10.127L231.729 10.3027C232.871 10.6367 233.891 11.1289 234.787 11.7969C235.648 12.4473 236.387 13.3438 236.967 14.4512C237.547 15.5586 237.846 16.6836 237.846 17.8262Z"
          fill="url(#paint0_linear_3181_6340)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3181_6340"
            x1="119.572"
            y1="-27.5385"
            x2="119.572"
            y2="42.6538"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#83D2FF" />
            <stop offset="0.409375" stopColor="#1C98DD" />
            <stop offset="0.742708" stopColor="#1C52DD" />
            <stop offset="1" stopColor="#055CBB" />
          </linearGradient>
        </defs>
      </SVGIconBase>
    );
  }

  return (
    <SVGIconBase
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 254.06 84.57"
      {...props}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}",
          }}
        />
        <linearGradient
          id="linear-gradient"
          x1="125.71"
          y1="103.46"
          x2="125.71"
          y2="33.27"
          gradientTransform="matrix(1, 0, 0, -1, 0, 86.45)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#83d2ff" />
          <stop offset="0.41" stopColor="#1c98dd" />
          <stop offset="0.74" stopColor="#1c52dd" />
          <stop offset={1} stopColor="#055cbb" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="129.71"
          y1="57.46"
          x2="129.71"
          y2="-12.73"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <title>Group 83</title>
      <path
        className="cls-1"
        d="M26.49,17a15.45,15.45,0,0,1-1.09,5.13A11.72,11.72,0,0,1,22.13,27c1,1.18,1.9,2.25,2.73,3.25,1.21,1.45,1.79,2.18,1.77,2.2a5.66,5.66,0,0,1-.95,2.34,3.5,3.5,0,0,1-2,1.49,7.14,7.14,0,0,1-2,.37,6.16,6.16,0,0,1-3.15-.82A7.87,7.87,0,0,1,16,33.17a10.32,10.32,0,0,1-1.4-4l-1.9,0V34a4,4,0,0,1-1.37,1.78,4.27,4.27,0,0,1-2.74.84q-6.25,0-6.26-6.48L2.08,12a9.13,9.13,0,0,1,4.86-1.29,7.21,7.21,0,0,1,4.35,1.18,3.86,3.86,0,0,1,1.63,3.36l-.07,7.12a3.6,3.6,0,0,0,.83.07A2.16,2.16,0,0,0,16.12,20l0-6.8c0-1.18,0-1.79,0-1.81L17.21,11c2.83-.68,5.1-.49,6.77.58S26.49,14.44,26.49,17ZM41.78,28.28H38.57v5.61a6.75,6.75,0,0,1-1.43,1.84,3.73,3.73,0,0,1-2.6.79q-6.09,0-6.08-6.48L28.2,11.9A9,9,0,0,1,33,10.6a6.79,6.79,0,0,1,4.23,1.17,4,4,0,0,1,1.57,3.41c0,2.78,0,5.1,0,7h2.87L41.56,11.9a9.2,9.2,0,0,1,4.8-1.3,6.76,6.76,0,0,1,4.2,1.17,4,4,0,0,1,1.58,3.41c0,2.48-.07,7.16-.21,14v4.71a4.89,4.89,0,0,1-1.32,1.75,3.82,3.82,0,0,1-2.64.88q-5.88,0-6.11-6.48ZM64.88,5.37c.27-.21.86-.63,1.8-1.26l3.77-2.55a2.38,2.38,0,0,1,1.66,1,3.1,3.1,0,0,1,.89,2,2.24,2.24,0,0,1-.66,1.11A53.9,53.9,0,0,1,66.13,10a2.44,2.44,0,0,1-1.77-.74,2.45,2.45,0,0,1-.78-1.84A2.73,2.73,0,0,1,64.88,5.37Zm1.65,5.23a9.7,9.7,0,0,1,4.93,1.26A14.88,14.88,0,0,1,75,14.51a11.05,11.05,0,0,1,2.18,3.77A15.4,15.4,0,0,1,78,23.59a15,15,0,0,1-.86,5.29A11.12,11.12,0,0,1,75,32.62a14.06,14.06,0,0,1-3.52,2.65,10,10,0,0,1-5,1.25,13.8,13.8,0,0,1-5.69-.93,21.42,21.42,0,0,1-4.48-3.11q-2.53-2.19-2.53-9.7A11.53,11.53,0,0,1,57.38,14,12.7,12.7,0,0,1,66.53,10.6Zm-.33,8.75a3.84,3.84,0,0,0-3.92,3.95c0,2.11.46,3.43,1.37,3.94a4.89,4.89,0,0,0,2.29.76,4.15,4.15,0,0,0,1.65-.32A3.71,3.71,0,0,0,69,26.29a5.36,5.36,0,0,0,.69-2.95,3.7,3.7,0,0,0-1.2-2.94A3.5,3.5,0,0,0,66.2,19.35Zm35.14,5.8L103.91,33a3,3,0,0,1-.87,1.9,5.6,5.6,0,0,1-1.37,1,5.8,5.8,0,0,1-2.91.59c-2.22,0-3.75-1.23-4.57-3.67-.22-.62-.43-1.28-.66-2l-.33-1.09,0-.29a9.42,9.42,0,0,0-4,0,23.57,23.57,0,0,0-1.72,5,2.28,2.28,0,0,1-.39.56,4,4,0,0,1-1.28.92,4.59,4.59,0,0,1-2.29.54A5.46,5.46,0,0,1,80,35.38a3.66,3.66,0,0,1-1.37-2.92A7.51,7.51,0,0,1,79,30.07q0,.27,6.68-18.17a6.11,6.11,0,0,1,2-.87,14.67,14.67,0,0,1,4-.43,6.47,6.47,0,0,1,3.92,1.05A9.24,9.24,0,0,1,98.3,15.8c.82,2.09,1.51,4.09,2.06,6S101.22,24.75,101.34,25.15ZM91.23,18.66l-1.12,5.63h2.53l-.9-5.66c0-.37-.09-.55-.26-.55S91.3,18.29,91.23,18.66Zm22.66,16.6-1.34-.5-.26-22.23c0-.11.42-.3,1.28-.58a27,27,0,0,1,3.75-.9A26.3,26.3,0,0,1,122,10.6a22.26,22.26,0,0,1,3.74.26A12.08,12.08,0,0,1,129,11.93a8.9,8.9,0,0,1,2.9,2.18,10.42,10.42,0,0,1,2,3.76,18.79,18.79,0,0,1,.78,5.64,18.3,18.3,0,0,1-.83,5.7,10.93,10.93,0,0,1-2.08,3.87,10,10,0,0,1-3,2.27,12,12,0,0,1-3.25,1.14,18.11,18.11,0,0,1-3.44.28,21.81,21.81,0,0,1-4.38-.49A25,25,0,0,1,113.89,35.26Zm9.18-7c2.4,0,3.6-1.65,3.6-4.9s-1.2-4.89-3.6-4.89a5.26,5.26,0,0,0-2.18.34,4.06,4.06,0,0,0-.74.35l.1,8.56A7.44,7.44,0,0,0,123.07,28.24ZM154.88,10.6a5.17,5.17,0,0,1,3.78,1.17,5.28,5.28,0,0,1,1.18,3.83l-.07,9a16.13,16.13,0,0,1-.39,2.81,16.47,16.47,0,0,1-.75,2.59,13,13,0,0,1-1.29,2.3,9.3,9.3,0,0,1-5,3.6,14.13,14.13,0,0,1-4.45.62,14.29,14.29,0,0,1-5-.88,9.57,9.57,0,0,1-3.57-2.15,11.61,11.61,0,0,1-2.22-3.46,12.22,12.22,0,0,1-1-5.06V11.58c0-.05.17-.14.51-.26a9.51,9.51,0,0,1,1.82-.44,16.37,16.37,0,0,1,2.89-.25c3.32,0,5,1.69,5,5.08l-.12,11a3.11,3.11,0,0,0,.47,1.77,1.66,1.66,0,0,0,1.38.74c1.07,0,1.61-.86,1.61-2.51l-.1-9.48c0-1.7,0-3.62,0-5.75,0-.19.6-.37,1.81-.56A20.17,20.17,0,0,1,154.88,10.6ZM184.12,15,184,23.81a15.11,15.11,0,0,1-.21,2.41,6.19,6.19,0,0,1-.62,2,15.6,15.6,0,0,1-1.35,2c-.63.83-2,1.51-3.94,2.06l0,3a5,5,0,0,1-2.23.9,15.38,15.38,0,0,1-3.31.4c-1.81,0-3-.47-3.57-1.42a6.56,6.56,0,0,1-.89-3,7.94,7.94,0,0,1-4.24-2.73,14,14,0,0,1-1.41-2.88q-.71-1.85-.7-10.91l0-4.14a3.1,3.1,0,0,1,.5-.24,7.88,7.88,0,0,1,1.76-.46,15.55,15.55,0,0,1,2.78-.24,5.35,5.35,0,0,1,3.69,1.08,4.38,4.38,0,0,1,1.18,3.38l-.11,9.58c0,1.27.51,1.93,1.55,2,.88,0,1.3-.69,1.28-2l-.1-13.1a6.26,6.26,0,0,1,1.14-.51,11.57,11.57,0,0,1,3.8-.43,5.71,5.71,0,0,1,3.83,1.05A4.25,4.25,0,0,1,184.12,15ZM209,20.35h-.91v12.5a2.58,2.58,0,0,1-.44,1.18,4.56,4.56,0,0,1-1,1.26,4.82,4.82,0,0,1-1.74.88,7.46,7.46,0,0,1-2.43.39,5.13,5.13,0,0,1-3.39-1A7.2,7.2,0,0,1,198,34.26a6.31,6.31,0,0,1-.86-2.75V20.35h-4.43A7.82,7.82,0,0,1,191.46,16a5.9,5.9,0,0,1,1.16-3.85,4.08,4.08,0,0,1,3.31-1.4l16.27-.12A7.72,7.72,0,0,1,213.47,15a6.12,6.12,0,0,1-1.16,3.92A3.94,3.94,0,0,1,209,20.35ZM224.3,10.6q11.83,0,11.85,8.71c0,2.83-.74,4.94-2.2,6.3a.36.36,0,0,0-.14.33c0,.58.61,1.93,1.83,4s1.84,3.16,1.84,3.21a3.12,3.12,0,0,1-1.83,2.45,7.64,7.64,0,0,1-3.76,1,4.4,4.4,0,0,1-3.79-2.28,19.57,19.57,0,0,1-1.16-1.9,16.81,16.81,0,0,1-.85-1.93c-.26-.74-.4-1.11-.42-1.13h-1.92v5.94c-.61.83-2.09,1.23-4.46,1.23a4.81,4.81,0,0,1-3.8-1.37,5.06,5.06,0,0,1-1.19-3.41L214.14,13c0-.44,1.28-.93,3.87-1.49A29.37,29.37,0,0,1,224.3,10.6Zm.44,12.53c2,0,3.06-.88,3.06-2.66A2.22,2.22,0,0,0,225.3,18a3,3,0,0,0-2,.54v4.26C223.42,23,223.91,23.13,224.74,23.13Zm24.61-8.07c0,2.81,0,5.13,0,7l-.23,11.87a7.84,7.84,0,0,1-1.38,1.84,3.64,3.64,0,0,1-2.61.79Q239,36.52,239,30l-.27-18.21a9.76,9.76,0,0,1,4.8-1.19,7.11,7.11,0,0,1,4.26,1.12A3.81,3.81,0,0,1,249.35,15.06ZM237.29,4.62a3.06,3.06,0,0,1,.9-2,2.35,2.35,0,0,1,1.65-1c3.16,2.07,5,3.34,5.57,3.81a2.73,2.73,0,0,1,1.3,2.08,2.51,2.51,0,0,1-.77,1.84,2.43,2.43,0,0,1-1.78.74A56.2,56.2,0,0,1,238,5.74,2.3,2.3,0,0,1,237.29,4.62Z"
      />
      <path
        className="cls-2"
        d="M21.82,82.52A8.47,8.47,0,0,1,17,81.06a7.72,7.72,0,0,1-3-4.27C10,67.16,7.86,62.18,7.44,61.89a4.43,4.43,0,0,1,2.09-3.52,6.9,6.9,0,0,1,4.15-1.58c2,0,3.62,1.25,4.83,3.74s2.18,6.44,2.9,11.8h.28c1.23-6.17,2-11,2.39-14.36l.41-.37A6,6,0,0,1,25.72,57a6.6,6.6,0,0,1,4.9.18,5.52,5.52,0,0,1,3.64,5.61,19,19,0,0,1-2.85,9.19,74.46,74.46,0,0,1-4.67,7.56l-1.8,2.55A10.43,10.43,0,0,1,21.82,82.52ZM58.08,71.15,60.65,79a3,3,0,0,1-.87,1.9,5.6,5.6,0,0,1-1.37,1,5.8,5.8,0,0,1-2.91.59c-2.22,0-3.75-1.23-4.57-3.67-.22-.62-.43-1.28-.65-2l-.34-1.09,0-.29a9.42,9.42,0,0,0-4,0,23.57,23.57,0,0,0-1.72,5,2.28,2.28,0,0,1-.39.56,4,4,0,0,1-1.28.92,4.59,4.59,0,0,1-2.29.54,5.46,5.46,0,0,1-3.57-1.14,3.66,3.66,0,0,1-1.37-2.92,7.51,7.51,0,0,1,.41-2.39q0,.27,6.68-18.17a6.11,6.11,0,0,1,2-.87,14.67,14.67,0,0,1,4-.43,6.47,6.47,0,0,1,3.92,1A9.24,9.24,0,0,1,55,61.8a62.52,62.52,0,0,1,2.06,6C57.62,69.64,58,70.75,58.08,71.15ZM48,64.66l-1.12,5.63h2.53l-.9-5.66c0-.37-.09-.55-.26-.55S48,64.29,48,64.66Zm-7.27-14a3.15,3.15,0,0,1,.89-2.06,2.45,2.45,0,0,1,1.67-1c3.11,2,5,3.32,5.57,3.83a2.65,2.65,0,0,1,1.3,2,2.61,2.61,0,0,1-2.56,2.59,58.54,58.54,0,0,1-6.21-4.29A2.24,2.24,0,0,1,40.7,50.67Zm46.23,6a5.09,5.09,0,0,1,4.32,1.8,7.88,7.88,0,0,1,1.37,4.88l-.14,9.41c0,2.69-.07,4.67-.11,6l-.05,1.37c0,.2-.33.67-1,1.43s-2,1.12-4,1.12-3.81-1-5.33-3.11a16.75,16.75,0,0,1-3-7.1h-.26l.65,8.7a5.1,5.1,0,0,1-1.92,1.06,8.43,8.43,0,0,1-2.69.45A5.67,5.67,0,0,1,70.67,81,6.41,6.41,0,0,1,69,76.3V57.83A8.62,8.62,0,0,1,74,56.6a5.4,5.4,0,0,1,4.56,1.93,11.59,11.59,0,0,1,2.09,4.8A29.49,29.49,0,0,0,82,68.16h.42c-.16-6-.25-9.1-.25-9.44a2,2,0,0,1,.18-1.07,3.09,3.09,0,0,1,1.27-.6A11.39,11.39,0,0,1,86.93,56.68Zm22-5.9,2.13,1.61a2,2,0,0,1,.68,1.62,2.16,2.16,0,0,1-.59,1.23,7,7,0,0,1-1.81,1c-1.29-1-2.31-1.76-3.06-2.44l-3.1,2.61a5.66,5.66,0,0,1-1.81-1.17,2.53,2.53,0,0,1-.65-1.27v-.25a1.61,1.61,0,0,1,.72-1.37l3.47-2.53a2.42,2.42,0,0,1,1.35-.75A9.2,9.2,0,0,1,109,50.78ZM119,79a5.3,5.3,0,0,1-1.09,2.2c-.65.86-2.06,1.3-4.19,1.3s-3.62-1.23-4.45-3.67a23.29,23.29,0,0,1-1-3.38l-2.08-.19a9.28,9.28,0,0,0-1.88.19l-.39,1a17.28,17.28,0,0,0-1.33,4.06,3.88,3.88,0,0,1-1.34,1.32,5.1,5.1,0,0,1-2.92.7,5,5,0,0,1-3.27-1.14,3.49,3.49,0,0,1-1.37-2.72,7.28,7.28,0,0,1,.48-2.76q1.77-4.68,6.61-18a6.11,6.11,0,0,1,2-.87,14.67,14.67,0,0,1,4-.43,6.47,6.47,0,0,1,3.92,1,9.24,9.24,0,0,1,2.67,4.15c.79,2,1.51,4.09,2.13,6.26S117.3,73.8,119,79ZM106.84,64.63v-.11c0-.3-.09-.44-.26-.44h0a1.53,1.53,0,0,0-.23.71c0,.4-.42,2.25-1.1,5.5h2.53Zm31-7.95a5.07,5.07,0,0,1,4.32,1.8,7.88,7.88,0,0,1,1.37,4.88l-.14,9.41c0,2.69-.07,4.67-.1,6l-.06,1.37c0,.2-.33.67-1,1.43s-2,1.12-4,1.12-3.81-1-5.33-3.11a16.75,16.75,0,0,1-3-7.1h-.26l.65,8.7a5.1,5.1,0,0,1-1.92,1.06,8.39,8.39,0,0,1-2.69.45A5.67,5.67,0,0,1,121.54,81a6.41,6.41,0,0,1-1.64-4.73V57.83a8.64,8.64,0,0,1,4.92-1.23,5.4,5.4,0,0,1,4.56,1.93,11.59,11.59,0,0,1,2.09,4.8,29.49,29.49,0,0,0,1.37,4.83h.42c-.16-6-.24-9.1-.24-9.44a2.05,2.05,0,0,1,.17-1.07,3.09,3.09,0,0,1,1.27-.6A11.44,11.44,0,0,1,137.8,56.68Zm20.88,25.81a12.69,12.69,0,0,1-9.25-3.76,13,13,0,0,1,0-18.32,12.28,12.28,0,0,1,9-3.81q5.2,0,7.65,2.19c1.65,1.46,2.51,2.89,2.6,4.26v.28q0,2.85-3.06,4.46a4,4,0,0,1-2.05.62l-.25-.49A5.07,5.07,0,0,0,159,65.38a5,5,0,0,0-3.54,1.34,4.28,4.28,0,0,0,0,6.4,5,5,0,0,0,3.5,1.33,6.39,6.39,0,0,0,1.3-.14L160.19,70a12,12,0,0,1,4.4-.75,9.06,9.06,0,0,1,3.83.68,2.11,2.11,0,0,1,1.42,1.92v4l-.19,6.87A4.24,4.24,0,0,1,166,84.18q-3.89,0-5.05-1.8C160.19,82.45,159.44,82.49,158.68,82.49Zm42.94-19.44v.28q0,2.85-3.06,4.46a4.69,4.69,0,0,1-2.05.62l-.25-.49a4.69,4.69,0,0,0-4.36-2.54,5,5,0,0,0-3.53,1.34,4.31,4.31,0,0,0,0,6.43,5,5,0,0,0,3.53,1.34,4.56,4.56,0,0,0,4.06-2,4.93,4.93,0,0,1,1.62-.34,3.24,3.24,0,0,1,2.67,1.39,4.85,4.85,0,0,1,1.07,3.08,6.39,6.39,0,0,1-.35,1.95,7,7,0,0,1-3.76,3.11,17.09,17.09,0,0,1-5.64.84,12.64,12.64,0,0,1-9.23-3.78,13,13,0,0,1,9.23-22.14,15,15,0,0,1,4.3.66,10.28,10.28,0,0,1,3.89,2.2A5.17,5.17,0,0,1,201.62,63.05Zm23.17,8.1L227.36,79a3,3,0,0,1-.86,1.9,5.93,5.93,0,0,1-1.38,1,5.8,5.8,0,0,1-2.91.59c-2.22,0-3.75-1.23-4.57-3.67-.21-.62-.43-1.28-.65-2l-.34-1.09,0-.29a9.42,9.42,0,0,0-4,0,23.57,23.57,0,0,0-1.72,5,2.28,2.28,0,0,1-.39.56,4,4,0,0,1-1.28.92,4.56,4.56,0,0,1-2.29.54,5.43,5.43,0,0,1-3.56-1.14A3.64,3.64,0,0,1,202,78.46a7.8,7.8,0,0,1,.41-2.39q0,.27,6.68-18.17a6.21,6.21,0,0,1,2-.87,14.67,14.67,0,0,1,4-.43,6.47,6.47,0,0,1,3.92,1,9.24,9.24,0,0,1,2.67,4.15,62.52,62.52,0,0,1,2.06,6C224.33,69.64,224.67,70.75,224.79,71.15Zm-10.11-6.49-1.12,5.63h2.53l-.9-5.66c0-.37-.08-.55-.26-.55S214.75,64.29,214.68,64.66Zm25.83-8.06a9.69,9.69,0,0,1,4.92,1.26,15.18,15.18,0,0,1,3.5,2.65,11.22,11.22,0,0,1,2.18,3.77,15.4,15.4,0,0,1,.87,5.31,15,15,0,0,1-.86,5.29A11.12,11.12,0,0,1,249,78.62a14.06,14.06,0,0,1-3.52,2.65,10,10,0,0,1-5,1.25,13.82,13.82,0,0,1-5.7-.93,21.42,21.42,0,0,1-4.48-3.11q-2.54-2.19-2.53-9.7A11.53,11.53,0,0,1,231.35,60,12.71,12.71,0,0,1,240.51,56.6Zm-.34,8.75a3.84,3.84,0,0,0-3.92,4c0,2.11.46,3.43,1.37,3.94a4.89,4.89,0,0,0,2.29.76,4.15,4.15,0,0,0,1.65-.32A3.71,3.71,0,0,0,243,72.29a5.36,5.36,0,0,0,.69-3,3.67,3.67,0,0,0-1.2-2.94A3.5,3.5,0,0,0,240.17,65.35Z"
      />
    </SVGIconBase>
  );
}