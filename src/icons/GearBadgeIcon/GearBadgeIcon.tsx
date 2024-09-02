import { IconProps } from "../../types"

export default function GearBadgeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.1953125 32.714004571435275"
          className={className}
        >
          <path
            d="              M16.5977 30.688C16.8297 30.688 17.0627 30.66 17.3227 30.647L17.9917 31.932C18.2387 32.479 18.8397 32.793 19.4827 32.684C20.0707 32.588 20.5347 32.096 20.6167 31.481L20.8087 30.031C21.2737 29.908 21.7247 29.731 22.1617 29.567L23.2417 30.524C23.6937 30.934 24.3357 31.03 24.9097 30.715C25.4297 30.387 25.6897 29.799 25.5527 29.197L25.2387 27.776C25.6077 27.488 25.9907 27.174 26.3597 26.846L27.7127 27.42C28.2737 27.653 28.8887 27.488 29.3127 26.996C29.6677 26.559 29.7637 25.916 29.4217 25.369L28.6427 24.112C28.8887 23.729 29.1207 23.305 29.3397 22.881L30.8167 22.949C31.4177 22.977 31.9917 22.608 32.1837 22.02C32.3887 21.459 32.1837 20.803 31.7187 20.447L30.5567 19.545C30.6657 19.08 30.7757 18.588 30.8297 18.123L32.1977 17.658C32.8127 17.467 33.1957 16.961 33.1957 16.346C33.1957 15.731 32.8127 15.225 32.1977 15.02L30.8297 14.569C30.6937 13.434 30.2827 12.026 29.7367 10.713C28.7657 11.793 27.4527 12.572 25.9907 12.846C26.1677 13.352 26.3047 13.871 26.4137 14.418H21.0547C20.3167 12.682 18.5937 11.492 16.5977 11.492C16.3787 11.492 16.1467 11.506 15.9277 11.533L13.2757 6.912C14.3147 6.529 15.4217 6.324 16.5977 6.324C17.0077 6.324 17.3907 6.352 17.7867 6.406C17.6367 5.203 18.1567 3.426 18.9627 2.237C17.8687 2.059 16.7757 1.99 15.8727 2.045L15.1897 0.746C14.9157 0.227 14.3417 -0.088 13.6987 0.022C13.1117 0.117 12.6597 0.61 12.5777 1.225L12.3727 2.66C11.9217 2.797 11.4567 2.961 11.0327 3.139L9.9667 2.182C9.5157 1.758 8.8597 1.676 8.2847 1.977C7.7657 2.278 7.4917 2.879 7.6287 3.508L7.9437 4.916C7.5737 5.217 7.1917 5.531 6.8357 5.832L5.4827 5.285C4.8947 5.053 4.2927 5.217 3.8687 5.709C3.5137 6.147 3.4457 6.803 3.7597 7.322L4.5387 8.553C4.2927 8.963 4.0607 9.373 3.8417 9.811L2.3787 9.756C1.7637 9.742 1.1897 10.098 0.9977 10.686C0.8067 11.246 0.9977 11.889 1.4627 12.244L2.6247 13.16C2.5157 13.625 2.4197 14.09 2.3657 14.569L0.9847 15.02C0.3687 15.225 -0.0003 15.731 -0.0003 16.346C-0.0003 16.961 0.3687 17.467 0.9847 17.658L2.3657 18.123C2.4197 18.588 2.5157 19.08 2.6247 19.545L1.4767 20.447C0.9977 20.817 0.8067 21.459 0.9977 22.006C1.1897 22.608 1.7637 22.977 2.3927 22.949L3.8417 22.881C4.0607 23.305 4.2927 23.729 4.5387 24.112L3.7457 25.383C3.4317 25.903 3.5137 26.559 3.8687 26.996C4.2927 27.488 4.8947 27.653 5.4957 27.406L6.8227 26.846C7.1917 27.174 7.5737 27.488 7.9437 27.776L7.6287 29.211C7.5197 29.799 7.7517 30.387 8.3127 30.729C8.8457 31.03 9.5157 30.947 9.9527 30.537L11.0327 29.567C11.4567 29.731 11.9077 29.908 12.3727 30.031L12.5777 31.481C12.6597 32.096 13.1117 32.588 13.7407 32.697C14.3417 32.793 14.9157 32.465 15.1897 31.946L15.8727 30.647C16.1187 30.66 16.3517 30.688 16.5977 30.688ZM24.6637 10.727C27.1937 10.727 29.2987 8.621 29.2987 6.092C29.2987 3.563 27.1937 1.457 24.6637 1.457C22.1347 1.457 20.0297 3.563 20.0297 6.092C20.0297 8.621 22.1347 10.727 24.6637 10.727ZM6.6037 16.346C6.6037 13.297 7.9437 10.59 10.0627 8.744L12.7557 13.379C12.1267 14.199 11.7437 15.225 11.7437 16.346C11.7437 17.44 12.0857 18.438 12.7007 19.244L9.9527 23.824C7.8887 21.992 6.6037 19.326 6.6037 16.346ZM16.5977 17.973C15.6817 17.973 14.9847 17.262 14.9847 16.346C14.9847 15.43 15.6817 14.719 16.5977 14.719C17.5137 14.719 18.2247 15.43 18.2247 16.346C18.2247 17.262 17.5137 17.973 16.5977 17.973ZM16.5977 26.354C15.3537 26.354 14.1777 26.135 13.0837 25.711L15.8457 21.145C16.0917 21.186 16.3517 21.199 16.5977 21.199C18.6347 21.199 20.3707 19.955 21.0957 18.192H26.4277C25.5667 22.84 21.5057 26.354 16.5977 26.354Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 31.25425683628323"
          className={className}
        >
          <path
            d="              M15.8597 29.3151C16.1327 29.3151 16.4197 29.3011 16.7067 29.2881L17.4177 30.6411C17.6227 31.0791 18.0877 31.3111 18.6077 31.2291C19.0857 31.1471 19.4417 30.7641 19.5097 30.2721L19.7287 28.7551C20.2757 28.6041 20.8087 28.3991 21.3277 28.1941L22.4487 29.1921C22.8187 29.5071 23.3237 29.6021 23.8027 29.3421C24.2127 29.0831 24.4177 28.6181 24.3087 28.1261L23.9937 26.6351C24.4317 26.3071 24.8827 25.9381 25.3067 25.5421L26.7007 26.1301C27.1657 26.3351 27.6577 26.1981 28.0137 25.8011C28.3007 25.4321 28.3557 24.9261 28.0817 24.4891L27.2757 23.1901C27.5897 22.7251 27.8637 22.2331 28.1227 21.7141L29.6547 21.7821C30.1327 21.8091 30.5977 21.5221 30.7477 21.0301C30.9117 20.5791 30.7477 20.0731 30.3787 19.7721L29.1757 18.8291C29.3127 18.2821 29.4217 17.7211 29.4767 17.1471L30.9117 16.6691C31.4047 16.5051 31.7187 16.1081 31.7187 15.6161C31.7187 15.1101 31.4047 14.7271 30.9117 14.5491L29.4767 14.0851C29.3537 12.8951 29.0257 11.6241 28.5197 10.4071C27.7267 11.2001 26.7147 11.7741 25.6077 12.0201C25.8537 12.7171 26.0317 13.4151 26.1137 14.1671H19.7827C19.2087 12.5531 17.6507 11.4051 15.8317 11.4051C15.5727 11.4051 15.2987 11.4461 15.0527 11.4871L11.8537 5.9771C13.0707 5.4581 14.4237 5.1711 15.8597 5.1711C16.3237 5.1711 16.7617 5.1981 17.2267 5.2661C17.1857 4.2961 17.5407 3.0511 18.1157 2.1351C17.0757 1.9441 15.9687 1.8761 14.9977 1.9441L14.2737 0.5771C14.0547 0.1671 13.6037 -0.0659 13.0977 0.0161C12.6057 0.0981 12.2637 0.4811 12.1957 0.9731L11.9767 2.4771C11.4297 2.6411 10.8827 2.8331 10.3637 3.0511L9.2557 2.0531C8.8867 1.7121 8.3807 1.6431 7.9027 1.8891C7.4917 2.1351 7.2867 2.6001 7.3967 3.1201L7.7107 4.5961C7.2597 4.9381 6.8087 5.3071 6.3987 5.6761L4.9907 5.1161C4.5257 4.9111 4.0467 5.0481 3.6917 5.4441C3.4047 5.8131 3.3497 6.3331 3.6097 6.7291L4.4157 8.0281C4.1157 8.5201 3.8417 8.9991 3.5687 9.5181L2.0507 9.4641C1.5587 9.4501 1.1077 9.7231 0.9567 10.2161C0.7927 10.6671 0.9437 11.1591 1.3257 11.4461L2.5297 12.4031C2.3927 12.9641 2.2827 13.5101 2.2287 14.0851L0.7797 14.5491C0.2867 14.7141 -0.0003 15.1101 -0.0003 15.6161C-0.0003 16.1221 0.2867 16.5181 0.7797 16.6691L2.2287 17.1471C2.2827 17.7211 2.3927 18.2821 2.5297 18.8291L1.3257 19.7721C0.9437 20.0731 0.7927 20.5791 0.9567 21.0301C1.1077 21.5221 1.5587 21.8091 2.0507 21.7821L3.5687 21.7141C3.8417 22.2331 4.1157 22.7251 4.4157 23.1901L3.6097 24.5031C3.3497 24.9131 3.4047 25.4321 3.6917 25.8011C4.0467 26.1981 4.5257 26.3351 5.0037 26.1301L6.3987 25.5421C6.8087 25.9381 7.2597 26.3071 7.7107 26.6351L7.3967 28.1391C7.3007 28.6181 7.4787 29.0831 7.9157 29.3561C8.3667 29.6021 8.8867 29.5201 9.2417 29.1921L10.3637 28.1941C10.8827 28.3991 11.4157 28.6041 11.9767 28.7551L12.1957 30.2721C12.2637 30.7641 12.6057 31.1471 13.1117 31.2431C13.6037 31.3111 14.0547 31.0651 14.2737 30.6411L14.9977 29.2881C15.2847 29.3011 15.5587 29.3151 15.8597 29.3151ZM23.8987 10.2291C26.4547 10.2291 28.5877 8.1101 28.5877 5.5401C28.5877 2.9831 26.4547 0.8641 23.8987 0.8641C21.3417 0.8641 19.2087 2.9831 19.2087 5.5401C19.2087 8.1101 21.3417 10.2291 23.8987 10.2291ZM5.4957 15.6161C5.4957 12.2661 7.0137 9.3131 9.4197 7.4131L12.6327 12.9091C12.0037 13.6331 11.6207 14.5911 11.6207 15.6301C11.6207 16.6551 11.9907 17.5981 12.6057 18.3231L9.3237 23.7371C6.9727 21.8371 5.4957 18.9111 5.4957 15.6161ZM15.8317 17.2021C14.9567 17.2021 14.2597 16.5181 14.2597 15.6301C14.2597 14.7411 14.9567 14.0441 15.8317 14.0441C16.7347 14.0441 17.4177 14.7411 17.4177 15.6301C17.4177 16.5181 16.7347 17.2021 15.8317 17.2021ZM15.8597 26.0611C14.3687 26.0611 12.9607 25.7471 11.7027 25.1861L15.0117 19.7581C15.2847 19.8131 15.5587 19.8411 15.8317 19.8411C17.6777 19.8411 19.2497 18.6511 19.8107 17.0101H26.1267C25.4707 22.1241 21.1917 26.0611 15.8597 26.0611Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 32.025128960618055"
          className={className}
        >
          <path
            d="              M16.2557 30.0425C16.5017 30.0425 16.7617 30.0285 17.0347 30.0015L17.7187 31.3135C17.9507 31.8195 18.4847 32.0935 19.0727 31.9975C19.6057 31.9015 20.0157 31.4645 20.0837 30.9035L20.3027 29.4275C20.8087 29.2905 21.2867 29.0995 21.7657 28.9215L22.8727 29.8925C23.2827 30.2615 23.8577 30.3565 24.3907 30.0695C24.8557 29.7685 25.0877 29.2355 24.9647 28.7025L24.6507 27.2395C25.0607 26.9255 25.4707 26.5975 25.8667 26.2275L27.2347 26.8155C27.7537 27.0345 28.3147 26.8845 28.6977 26.4335C29.0257 26.0225 29.0937 25.4485 28.7927 24.9565L27.9997 23.6715C28.2737 23.2475 28.5327 22.7965 28.7657 22.3315L30.2557 22.3995C30.8167 22.4275 31.3357 22.0995 31.4997 21.5525C31.6917 21.0465 31.4997 20.4585 31.0897 20.1305L29.9007 19.2005C30.0237 18.6945 30.1327 18.1755 30.1877 17.6555L31.5957 17.1905C32.1567 17.0135 32.4977 16.5615 32.4977 16.0015C32.4977 15.4405 32.1567 14.9895 31.5957 14.7985L30.1877 14.3335C30.0647 13.1715 29.6817 11.8455 29.1617 10.5735C28.2737 11.5175 27.1117 12.1865 25.8127 12.4605C26.0177 13.0485 26.1677 13.6495 26.2637 14.2925H20.4527C19.7967 12.6245 18.1567 11.4485 16.2417 11.4485C15.9957 11.4485 15.7497 11.4765 15.5177 11.5175L12.6057 6.4725C13.7267 6.0345 14.9567 5.7885 16.2557 5.7885C16.6797 5.7885 17.0897 5.8025 17.5277 5.8705C17.4177 4.7765 17.8687 3.2455 18.5667 2.1925C17.4867 2.0015 16.3927 1.9335 15.4487 2.0015L14.7657 0.6615C14.5197 0.1965 13.9997 -0.0765 13.4117 0.0185C12.8787 0.1145 12.4687 0.5525 12.3867 1.1125L12.1817 2.5755C11.6897 2.7265 11.1977 2.9035 10.7187 3.0955L9.6247 2.1245C9.2147 1.7415 8.6407 1.6595 8.1077 1.9465C7.6427 2.2065 7.3967 2.7535 7.5197 3.3135L7.8337 4.7635C7.4237 5.0915 7.0137 5.4195 6.6307 5.7615L5.2497 5.2005C4.7167 4.9815 4.1697 5.1325 3.7867 5.5835C3.4587 5.9935 3.4047 6.5815 3.6917 7.0465L4.4847 8.3045C4.2107 8.7555 3.9647 9.1925 3.7187 9.6715L2.2147 9.6165C1.6677 9.6025 1.1487 9.9175 0.9847 10.4645C0.7927 10.9705 0.9847 11.5445 1.3947 11.8725L2.5837 12.8025C2.4607 13.3085 2.3517 13.8135 2.2967 14.3335L0.8887 14.7985C0.3277 14.9895 -0.0003 15.4405 -0.0003 16.0015C-0.0003 16.5615 0.3277 17.0135 0.8887 17.1905L2.2967 17.6555C2.3517 18.1755 2.4607 18.6945 2.5837 19.2005L1.4077 20.1305C0.9847 20.4725 0.7927 21.0465 0.9847 21.5385C1.1487 22.0995 1.6677 22.4275 2.2287 22.3995L3.7187 22.3315C3.9507 22.7965 4.2107 23.2475 4.4847 23.6715L3.6777 24.9705C3.3907 25.4345 3.4587 26.0225 3.7867 26.4335C4.1697 26.8845 4.7167 27.0345 5.2637 26.8025L6.6167 26.2275C7.0137 26.5975 7.4237 26.9255 7.8337 27.2395L7.5197 28.7025C7.4097 29.2355 7.6287 29.7685 8.1207 30.0695C8.6267 30.3565 9.2147 30.2745 9.6117 29.9055L10.7187 28.9215C11.1977 29.0995 11.6757 29.2905 12.1817 29.4275L12.3867 30.9035C12.4687 31.4645 12.8787 31.9015 13.4397 32.0115C13.9997 32.0935 14.5197 31.8065 14.7657 31.3275L15.4487 30.0015C15.7227 30.0285 15.9827 30.0425 16.2557 30.0425ZM24.3087 10.4915C26.8377 10.4915 28.9567 8.3865 28.9567 5.8295C28.9567 3.2865 26.8377 1.1815 24.3087 1.1815C21.7517 1.1815 19.6467 3.2865 19.6467 5.8295C19.6467 8.3865 21.7517 10.4915 24.3087 10.4915ZM6.0837 16.0015C6.0837 12.8155 7.5057 9.9855 9.7617 8.1125L12.6877 13.1575C12.0727 13.9365 11.6897 14.9215 11.6897 16.0015C11.6897 17.0675 12.0447 18.0385 12.6597 18.8045L9.6527 23.7805C7.4507 21.9215 6.0837 19.1325 6.0837 16.0015ZM16.2417 17.6015C15.3397 17.6015 14.6427 16.9175 14.6427 16.0015C14.6427 15.0995 15.3397 14.4015 16.2417 14.4015C17.1447 14.4015 17.8417 15.0995 17.8417 16.0015C17.8417 16.9175 17.1447 17.6015 16.2417 17.6015ZM16.2557 26.2145C14.8887 26.2145 13.6037 25.9545 12.4277 25.4625L15.4487 20.4855C15.7087 20.5405 15.9687 20.5675 16.2417 20.5675C18.1837 20.5675 19.8377 19.3375 20.4937 17.6285H26.2777C25.5257 22.5095 21.3557 26.2145 16.2557 26.2145Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.203125 28.784709310636273"
          className={className}
        >
          <path
            d="              M14.6017 27.1136C14.9437 27.1136 15.3127 27.1136 15.6547 27.0726L16.3517 28.3996C16.5017 28.6866 16.7617 28.8366 17.1307 28.7686C17.4867 28.7136 17.6777 28.4946 17.7187 28.1396L17.9507 26.6766C18.6207 26.4986 19.2907 26.2386 19.9337 25.9516L21.0277 26.9226C21.2737 27.1416 21.5737 27.2096 21.9157 27.0316C22.2027 26.8676 22.3257 26.5806 22.2437 26.2256L21.9567 24.7896C22.5177 24.3936 23.0777 23.9286 23.5707 23.4366L24.9097 23.9836C25.2387 24.1336 25.5257 24.0656 25.7987 23.7646C26.0317 23.5046 26.0317 23.2036 25.8397 22.9026L25.0737 21.6456C25.4707 21.0706 25.8257 20.4556 26.1267 19.8136L27.6037 19.8676C27.9457 19.8956 28.2187 19.7316 28.3147 19.3896C28.4377 19.0616 28.3277 18.7746 28.0687 18.5556L26.9197 17.6396C27.0977 16.9556 27.2207 16.2586 27.2757 15.5336L28.6567 15.0826C29.0257 14.9736 29.2027 14.7406 29.2027 14.3856C29.2027 14.0296 29.0257 13.7976 28.6567 13.6746L27.2757 13.2366C27.1527 11.8286 26.8657 10.6396 26.3727 9.4906C25.8947 9.8736 25.3617 10.1886 24.7867 10.3936C25.1697 11.3916 25.4157 12.4716 25.4847 13.5926H17.7737C17.4177 12.1706 16.1187 11.1046 14.5877 11.1046C14.2457 11.1046 13.9177 11.1726 13.6167 11.2686L9.6797 4.4866C11.1427 3.7626 12.8107 3.3386 14.6017 3.3386C15.2987 3.3386 15.9137 3.3936 16.5707 3.5436C16.6527 2.9696 16.8297 2.4226 17.0897 1.9306C16.0097 1.6846 14.6567 1.6026 13.5347 1.6976L12.8377 0.3716C12.6877 0.0986 12.4277 -0.0524 12.0587 0.0166C11.7027 0.0706 11.5257 0.2896 11.4707 0.6456L11.2387 2.0946C10.5687 2.2856 9.8987 2.5186 9.2417 2.8056L8.1617 1.8616C7.9027 1.6156 7.6157 1.5746 7.2737 1.7526C6.9867 1.9026 6.8767 2.1766 6.9457 2.5596L7.2457 3.9816C6.6717 4.3916 6.1247 4.8566 5.6187 5.3346L4.2797 4.8016C3.9507 4.6516 3.6637 4.7056 3.3907 5.0206C3.1717 5.2796 3.1577 5.5806 3.3357 5.8546L4.1157 7.1256C3.7327 7.7136 3.3767 8.3016 3.0627 8.9576L1.5857 8.9166C1.2437 8.8896 0.9847 9.0536 0.8747 9.3956C0.7517 9.7366 0.8477 9.9966 1.1207 10.2156L2.2697 11.1316C2.0917 11.8156 1.9687 12.5126 1.9277 13.2366L0.5197 13.6746C0.1637 13.7976 -0.0003 14.0296 -0.0003 14.3856C-0.0003 14.7406 0.1637 14.9736 0.5197 15.0826L1.9277 15.5476C1.9687 16.2586 2.0917 16.9556 2.2697 17.6396L1.1207 18.5556C0.8617 18.7606 0.7517 19.0476 0.8747 19.3896C0.9707 19.7316 1.2437 19.8956 1.5857 19.8676L3.0627 19.8136C3.3767 20.4556 3.7327 21.0706 4.1157 21.6456L3.3497 22.9026C3.1717 23.2036 3.1717 23.5046 3.3907 23.7646C3.6637 24.0656 3.9507 24.1336 4.2797 23.9836L5.6187 23.4366C6.1247 23.9286 6.6717 24.3936 7.2457 24.7896L6.9457 26.2256C6.8767 26.5806 6.9867 26.8676 7.2737 27.0316C7.6157 27.2096 7.9157 27.1416 8.1617 26.9226L9.2417 25.9516C9.8987 26.2386 10.5687 26.4986 11.2387 26.6766L11.4707 28.1396C11.5257 28.4946 11.7027 28.7136 12.0727 28.7686C12.4277 28.8366 12.6877 28.6866 12.8377 28.3996L13.5347 27.0726C13.8767 27.1136 14.2327 27.1136 14.6017 27.1136ZM22.4217 9.3816C24.8827 9.3816 26.9337 7.3306 26.9337 4.8566C26.9337 2.3816 24.8827 0.3446 22.4217 0.3446C19.9477 0.3446 17.8967 2.3816 17.8967 4.8566C17.8967 7.3306 19.9477 9.3816 22.4217 9.3816ZM3.7047 14.3996C3.7047 10.5706 5.5367 7.2486 8.3807 5.2796L12.3187 12.0336C11.6897 12.6216 11.3067 13.4696 11.3067 14.3996C11.3067 15.3566 11.7167 16.2036 12.3597 16.7916L8.3257 23.4496C5.5097 21.4816 3.7047 18.1726 3.7047 14.3996ZM14.5877 16.0806C13.6307 16.0806 12.8927 15.3696 12.8927 14.3996C12.8927 13.4426 13.6307 12.7036 14.5877 12.7036C15.5447 12.7036 16.2827 13.4426 16.2827 14.3996C16.2827 15.3696 15.5447 16.0806 14.5877 16.0806ZM14.6017 25.4326C12.7967 25.4326 11.1017 25.0086 9.6117 24.2426L13.6717 17.5436C13.9587 17.6256 14.2597 17.6806 14.5877 17.6806C16.1597 17.6806 17.4867 16.5596 17.7867 15.0826H25.4847C25.1427 20.9066 20.5077 25.4326 14.6017 25.4326Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.775390625 30.310673562942302"
          className={className}
        >
          <path
            d="              M15.3807 28.4516C15.6957 28.4516 15.9957 28.4376 16.3107 28.4106L17.0627 29.8186C17.2407 30.1736 17.6097 30.3656 18.0467 30.2966C18.4567 30.2146 18.7437 29.9146 18.7987 29.4906L19.0317 27.9316C19.6327 27.7676 20.2207 27.5486 20.7947 27.3026L21.9567 28.3286C22.2577 28.6016 22.6817 28.6836 23.0917 28.4646C23.4337 28.2596 23.6117 27.8496 23.5017 27.4396L23.1877 25.9086C23.6797 25.5526 24.1857 25.1426 24.6227 24.7186L26.0587 25.3066C26.4687 25.4846 26.8657 25.3746 27.1657 25.0336C27.4257 24.7186 27.4527 24.2946 27.2347 23.9256L26.4137 22.5856C26.7557 22.0806 27.0567 21.5336 27.3437 20.9586L28.9027 21.0276C29.3127 21.0546 29.7087 20.8226 29.8317 20.4126C29.9687 20.0156 29.8187 19.6056 29.5177 19.3596L28.2867 18.3746C28.4507 17.7736 28.5467 17.1586 28.6157 16.5156L30.0777 16.0376C30.5017 15.9006 30.7757 15.5726 30.7757 15.1486C30.7757 14.7246 30.5017 14.3966 30.0777 14.2596L28.6157 13.7816C28.4917 12.5506 28.2047 11.3616 27.7407 10.2126C27.0707 10.8146 26.2497 11.2656 25.3617 11.4986C25.6487 12.3046 25.8537 13.1386 25.9217 14.0136H18.9767C18.4977 12.4686 17.0487 11.3616 15.3537 11.3616C15.0527 11.3616 14.7517 11.4026 14.4787 11.4706L10.9507 5.3866C12.2777 4.7716 13.7817 4.4296 15.3807 4.4296C15.8867 4.4296 16.3657 4.4566 16.8577 4.5526C16.8987 3.7056 17.1577 2.8026 17.5817 2.0646C16.5567 1.8736 15.4487 1.8186 14.4377 1.8866L13.6857 0.4786C13.5077 0.1366 13.1387 -0.0544 12.7007 0.0136C12.2907 0.0956 12.0177 0.3966 11.9487 0.8206L11.7167 2.3656C11.1157 2.5426 10.5277 2.7486 9.9397 2.9946L8.7907 1.9826C8.4907 1.6816 8.0667 1.6266 7.6697 1.8456C7.3147 2.0376 7.1507 2.4196 7.2457 2.8716L7.5607 4.3746C7.0687 4.7446 6.5627 5.1676 6.1247 5.5646L4.6757 5.0036C4.2797 4.8396 3.8827 4.9356 3.5817 5.2776C3.3357 5.5916 3.2817 6.0156 3.5137 6.3576L4.3337 7.6976C3.9917 8.2166 3.7047 8.7496 3.4047 9.3376L1.8457 9.2836C1.4357 9.2556 1.0527 9.4886 0.9157 9.8986C0.7797 10.2946 0.9157 10.6916 1.2307 10.9376L2.4607 11.9216C2.3107 12.5376 2.1877 13.1386 2.1467 13.7816L0.6567 14.2596C0.2327 14.3826 -0.0003 14.7106 -0.0003 15.1486C-0.0003 15.5726 0.2327 15.9006 0.6567 16.0376L2.1467 16.5156C2.1877 17.1586 2.2967 17.7736 2.4607 18.3746L1.2437 19.3596C0.9157 19.6056 0.7797 20.0156 0.9157 20.3986C1.0387 20.8226 1.4357 21.0546 1.8457 21.0276L3.4047 20.9586C3.7047 21.5336 3.9917 22.0806 4.3337 22.5856L3.5137 23.9256C3.2947 24.2946 3.3227 24.7186 3.5817 25.0336C3.8827 25.3746 4.2797 25.4846 4.6897 25.3066L6.1117 24.7186C6.5627 25.1426 7.0687 25.5526 7.5607 25.9086L7.2457 27.4396C7.1637 27.8496 7.3147 28.2596 7.6697 28.4646C8.0667 28.6836 8.4907 28.6016 8.7907 28.3286L9.9397 27.3026C10.5277 27.5486 11.1157 27.7676 11.7167 27.9316L11.9487 29.4906C12.0177 29.9146 12.2907 30.2146 12.7147 30.2966C13.1387 30.3656 13.5077 30.1736 13.6857 29.8186L14.4377 28.4106C14.7387 28.4376 15.0527 28.4516 15.3807 28.4516ZM23.4197 9.9126C25.9907 9.9126 28.1367 7.7926 28.1367 5.1956C28.1367 2.6116 25.9907 0.4786 23.4197 0.4786C20.8227 0.4786 18.6897 2.6116 18.6897 5.1956C18.6897 7.7926 20.8227 9.9126 23.4197 9.9126ZM4.7847 15.1626C4.7847 11.6076 6.4257 8.4906 9.0097 6.5486L12.5507 12.5916C11.9357 13.2756 11.5527 14.1776 11.5527 15.1756C11.5527 16.1606 11.9217 17.0626 12.5507 17.7186L8.9277 23.6796C6.3847 21.7386 4.7847 18.6626 4.7847 15.1626ZM15.3537 16.7066C14.4787 16.7066 13.8087 16.0506 13.8087 15.1756C13.8087 14.2876 14.4787 13.6176 15.3537 13.6176C16.2287 13.6176 16.9117 14.2876 16.9117 15.1756C16.9117 16.0506 16.2287 16.7066 15.3537 16.7066ZM15.3807 25.8676C13.7407 25.8676 12.1957 25.4986 10.8277 24.8416L14.4647 18.8676C14.7517 18.9356 15.0387 18.9626 15.3537 18.9626C17.0757 18.9626 18.5387 17.8146 18.9907 16.2426H25.9217C25.4157 21.6696 20.9867 25.8676 15.3807 25.8676Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.2421875 29.794326806627417"
          className={className}
        >
          <path
            d="              M15.1077 27.9604C15.4357 27.9604 15.7637 27.9474 16.0917 27.9194L16.8577 29.3554C17.0217 29.6834 17.3497 29.8474 17.7327 29.7794C18.1017 29.7104 18.3617 29.4374 18.4027 29.0544L18.6487 27.4684C19.2777 27.3044 19.8927 27.0724 20.4937 26.8124L21.6697 27.8514C21.9437 28.0974 22.3257 28.1794 22.6817 27.9744C22.9957 27.7964 23.1467 27.4414 23.0507 27.0584L22.7367 25.5134C23.2557 25.1304 23.7757 24.7064 24.2407 24.2554L25.6897 24.8574C26.0727 25.0074 26.4277 24.9114 26.7007 24.5974C26.9197 24.3234 26.9607 23.9414 26.7557 23.6134L25.9217 22.2594C26.2777 21.7264 26.6057 21.1524 26.9067 20.5504L28.4917 20.6054C28.8477 20.6324 29.2027 20.4414 29.3127 20.0584C29.4357 19.7024 29.3127 19.3474 29.0257 19.1154L27.7947 18.1304C27.9587 17.5014 28.0687 16.8454 28.1227 16.1614L29.6137 15.6834C29.9957 15.5604 30.2417 15.2734 30.2417 14.8904C30.2417 14.4934 29.9957 14.2204 29.6137 14.0974L28.1227 13.6184C28.0137 12.3614 27.7537 11.2264 27.3027 10.1184C26.6877 10.6114 25.9907 10.9804 25.2387 11.2124C25.5387 12.0734 25.7437 12.9764 25.8127 13.9334H18.5117C18.1017 12.4294 16.7067 11.3354 15.0797 11.3354C14.7657 11.3354 14.4507 11.3764 14.1637 11.4584L10.4457 5.0604C11.8397 4.3904 13.4117 4.0214 15.1077 4.0214C15.6407 4.0214 16.1467 4.0484 16.6657 4.1444C16.7347 3.3924 16.9397 2.6674 17.2677 2.0254C16.2697 1.8334 15.1617 1.7794 14.1097 1.8614L13.3577 0.4254C13.1937 0.1114 12.8657 -0.0526 12.4827 0.0154C12.1137 0.0834 11.8807 0.3574 11.8127 0.7404L11.5667 2.2984C10.9377 2.4904 10.3227 2.7084 9.7067 2.9544L8.5447 1.9434C8.2577 1.6694 7.8887 1.6154 7.5197 1.8204C7.2187 1.9844 7.0817 2.3254 7.1637 2.7364L7.4647 4.2674C6.9587 4.6504 6.4257 5.0874 5.9607 5.5114L4.5117 4.9374C4.1427 4.7864 3.7867 4.8684 3.5137 5.1974C3.2947 5.4704 3.2537 5.8534 3.4457 6.1544L4.2927 7.5074C3.9377 8.0684 3.6227 8.6284 3.3087 9.2304L1.7227 9.1894C1.3537 9.1614 1.0117 9.3534 0.9027 9.7364C0.7797 10.0914 0.8887 10.4334 1.1897 10.6524L2.4197 11.6504C2.2557 12.2924 2.1467 12.9354 2.1057 13.6184L0.5877 14.0974C0.2047 14.2064 -0.0003 14.4934 -0.0003 14.8904C-0.0003 15.2864 0.2047 15.5604 0.5877 15.6834L2.1057 16.1614C2.1467 16.8454 2.2557 17.5014 2.4197 18.1304L1.1897 19.1154C0.8887 19.3474 0.7797 19.7024 0.9027 20.0584C1.0117 20.4414 1.3537 20.6324 1.7227 20.6054L3.3087 20.5504C3.6227 21.1524 3.9377 21.7264 4.2927 22.2594L3.4587 23.6134C3.2677 23.9414 3.2817 24.3234 3.5137 24.5974C3.7867 24.9114 4.1427 25.0074 4.5257 24.8574L5.9607 24.2554C6.4257 24.7064 6.9587 25.1304 7.4647 25.5134L7.1637 27.0584C7.0957 27.4414 7.2187 27.7964 7.5197 27.9744C7.8887 28.1794 8.2577 28.0974 8.5447 27.8514L9.7067 26.8124C10.3227 27.0724 10.9377 27.3044 11.5667 27.4824L11.8127 29.0544C11.8807 29.4374 12.1137 29.7104 12.4827 29.7794C12.8657 29.8474 13.1937 29.6834 13.3577 29.3554L14.1097 27.9194C14.4377 27.9474 14.7657 27.9604 15.1077 27.9604ZM23.1467 9.7494C25.7307 9.7494 27.8767 7.6034 27.8767 5.0054C27.8767 2.4074 25.7307 0.2614 23.1467 0.2614C20.5347 0.2614 18.4027 2.4074 18.4027 5.0054C18.4027 7.6034 20.5347 9.7494 23.1467 9.7494ZM4.3887 14.9044C4.3887 11.2404 6.0837 8.0274 8.7777 6.0724L12.5097 12.4294C11.8947 13.0724 11.5117 13.9474 11.5117 14.9174C11.5117 15.8884 11.8947 16.7634 12.5237 17.3924L8.6957 23.6544C6.0567 21.6984 4.3887 18.5134 4.3887 14.9044ZM15.0797 16.4354C14.2187 16.4354 13.5487 15.7924 13.5487 14.9174C13.5487 14.0424 14.2187 13.3724 15.0797 13.3724C15.9547 13.3724 16.6247 14.0424 16.6247 14.9174C16.6247 15.7924 15.9547 16.4354 15.0797 16.4354ZM15.1077 25.7594C13.3847 25.7594 11.7577 25.3634 10.3357 24.6654L14.1637 18.3634C14.4647 18.4454 14.7657 18.4864 15.0797 18.4864C16.7347 18.4864 18.1427 17.3514 18.5387 15.8204H25.8127C25.3747 21.4254 20.8767 25.7594 15.1077 25.7594Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.171875 30.719381100201915"
          className={className}
        >
          <path
            d="              M15.5857 28.833C15.8867 28.833 16.1877 28.806 16.4887 28.792L17.2127 30.173C17.4047 30.57 17.8147 30.775 18.2927 30.706C18.7307 30.624 19.0447 30.283 19.0997 29.831L19.3317 28.287C19.9067 28.136 20.4807 27.917 21.0277 27.685L22.1617 28.697C22.5037 28.997 22.9547 29.079 23.3927 28.847C23.7757 28.615 23.9527 28.191 23.8437 27.74L23.5297 26.236C24.0077 25.88 24.4867 25.484 24.9237 25.074L26.3317 25.675C26.7697 25.853 27.2067 25.73 27.5347 25.361C27.7947 25.033 27.8497 24.568 27.6037 24.171L26.7827 22.845C27.1117 22.367 27.4117 21.833 27.6857 21.286L29.2307 21.355C29.6677 21.382 30.0917 21.122 30.2287 20.685C30.3787 20.261 30.2147 19.81 29.8867 19.536L28.6697 18.579C28.8207 18.005 28.9297 17.404 28.9847 16.788L30.4337 16.31C30.8987 16.16 31.1717 15.804 31.1717 15.353C31.1717 14.888 30.8987 14.546 30.4337 14.382L28.9847 13.917C28.8617 12.701 28.5607 11.484 28.0817 10.308C27.3577 10.978 26.4547 11.484 25.4707 11.73C25.7437 12.482 25.9217 13.261 26.0037 14.081H19.3187C18.7987 12.509 17.3087 11.388 15.5587 11.388C15.2717 11.388 14.9847 11.415 14.7247 11.484L11.3477 5.646C12.6187 5.072 14.0547 4.757 15.5857 4.757C16.0777 4.757 16.5427 4.785 17.0217 4.867C17.0217 3.964 17.3227 2.911 17.8147 2.091C16.7757 1.913 15.6677 1.845 14.6697 1.913L13.9457 0.519C13.7407 0.15 13.3437 -0.055 12.8657 0.013C12.4277 0.095 12.1267 0.437 12.0587 0.888L11.8257 2.419C11.2517 2.583 10.6777 2.788 10.1307 3.021L8.9957 2.023C8.6547 1.695 8.2027 1.64 7.7657 1.872C7.3827 2.078 7.2047 2.501 7.3147 2.98L7.6287 4.47C7.1507 4.826 6.6717 5.236 6.2477 5.619L4.8127 5.044C4.3747 4.867 3.9507 4.976 3.6227 5.359C3.3637 5.687 3.3087 6.152 3.5547 6.521L4.3747 7.847C4.0467 8.353 3.7597 8.859 3.4727 9.419L1.9277 9.365C1.4907 9.351 1.0667 9.597 0.9297 10.035C0.7927 10.458 0.9297 10.896 1.2717 11.156L2.4887 12.126C2.3377 12.714 2.2287 13.302 2.1877 13.917L0.7107 14.382C0.2597 14.533 -0.0003 14.888 -0.0003 15.353C-0.0003 15.818 0.2597 16.173 0.7107 16.31L2.1877 16.788C2.2287 17.404 2.3377 18.005 2.4887 18.579L1.2847 19.536C0.9297 19.81 0.7927 20.261 0.9297 20.671C1.0667 21.122 1.4907 21.382 1.9417 21.355L3.4727 21.286C3.7597 21.833 4.0467 22.367 4.3747 22.845L3.5547 24.185C3.3087 24.568 3.3637 25.033 3.6227 25.361C3.9507 25.73 4.3747 25.853 4.8257 25.662L6.2347 25.074C6.6717 25.484 7.1507 25.88 7.6287 26.236L7.3147 27.753C7.2187 28.191 7.3827 28.615 7.7797 28.847C8.1897 29.079 8.6547 28.997 8.9827 28.71L10.1307 27.685C10.6777 27.917 11.2387 28.136 11.8257 28.287L12.0587 29.831C12.1267 30.283 12.4277 30.624 12.8787 30.706C13.3437 30.775 13.7407 30.57 13.9457 30.173L14.6697 28.792C14.9707 28.806 15.2717 28.833 15.5857 28.833ZM23.6247 10.062C26.1957 10.062 28.3277 7.929 28.3277 5.345C28.3277 2.775 26.1957 0.642 23.6247 0.642C21.0407 0.642 18.9217 2.775 18.9217 5.345C18.9217 7.929 21.0407 10.062 23.6247 10.062ZM5.0857 15.367C5.0857 11.894 6.6857 8.845 9.1877 6.917L12.5917 12.728C11.9627 13.425 11.5797 14.355 11.5797 15.367C11.5797 16.378 11.9487 17.294 12.5777 17.978L9.0917 23.706C6.6447 21.792 5.0857 18.771 5.0857 15.367ZM15.5587 16.925C14.6837 16.925 13.9997 16.255 13.9997 15.367C13.9997 14.478 14.6837 13.808 15.5587 13.808C16.4477 13.808 17.1307 14.478 17.1307 15.367C17.1307 16.255 16.4477 16.925 15.5587 16.925ZM15.5857 25.949C14.0137 25.949 12.5237 25.607 11.2107 24.992L14.6977 19.249C14.9847 19.318 15.2577 19.345 15.5587 19.345C17.3357 19.345 18.8537 18.183 19.3457 16.57H26.0037C25.4297 21.874 21.0687 25.949 15.5857 25.949Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.849609375 27.44194095850235"
          className={className}
        >
          <path
            d="              M13.9177 26.0053C14.2867 26.0053 14.6977 25.9913 15.0667 25.9503L15.6957 27.1263C15.8317 27.3863 15.9957 27.4813 16.3377 27.4273C16.6797 27.3863 16.7757 27.2493 16.8297 26.9213L17.0347 25.6083C17.7737 25.4173 18.4977 25.1443 19.1957 24.8153L20.1797 25.6903C20.3847 25.8823 20.5897 25.9373 20.8907 25.7733C21.1507 25.6493 21.2457 25.4583 21.1637 25.1163L20.9047 23.8313C21.5327 23.4073 22.1347 22.9013 22.6677 22.3413L23.8707 22.8333C24.1447 22.9563 24.3357 22.9293 24.6097 22.6553C24.8277 22.4233 24.8007 22.2183 24.6367 21.9583L23.9527 20.8233C24.3907 20.2083 24.8007 19.5243 25.1017 18.8413L26.4277 18.8823C26.7417 18.9233 26.9197 18.8143 27.0017 18.4993C27.1117 18.1983 27.0427 18.0073 26.8107 17.8153L25.7717 16.9813C25.9767 16.2433 26.0997 15.4913 26.1547 14.6983L27.4117 14.2883C27.7267 14.1923 27.8497 14.0153 27.8497 13.7143C27.8497 13.4133 27.7267 13.2223 27.4117 13.1263L26.1547 12.7303C26.0037 11.1303 25.6897 9.8583 25.1287 8.6553C24.8417 8.9153 24.5277 9.1343 24.1857 9.2983C24.6777 10.4873 24.9647 11.7863 25.0467 13.1533H16.7757C16.5157 11.8143 15.3397 10.8153 13.9317 10.8153C13.5627 10.8153 13.2067 10.8973 12.8927 11.0213L8.6817 3.7333C10.2267 2.9133 12.0037 2.4353 13.9177 2.4353C14.8207 2.4353 15.5997 2.5303 16.4477 2.7493C16.5427 2.4073 16.6797 2.0933 16.8577 1.8063C15.6547 1.4783 13.9997 1.3553 12.7697 1.4913L12.1407 0.2883C12.0177 0.0563 11.8397 -0.0397 11.4977 0.0153C11.1567 0.0563 11.0737 0.1923 11.0197 0.5213L10.8147 1.8193C10.0757 2.0243 9.3377 2.2713 8.6267 2.5993L7.6697 1.7513C7.4237 1.5463 7.2457 1.5053 6.9457 1.6693C6.6857 1.7923 6.6037 1.9703 6.6717 2.3253L6.9317 3.6103C6.3027 4.0343 5.7007 4.5403 5.1547 5.0873L3.9647 4.6083C3.6917 4.4723 3.4997 4.4993 3.2407 4.7863C3.0217 5.0193 3.0217 5.2243 3.1987 5.4563L3.8967 6.6053C3.4587 7.2333 3.0627 7.8903 2.7347 8.6013L1.4077 8.5603C1.0937 8.5193 0.9297 8.6283 0.8337 8.9423C0.7107 9.2573 0.7927 9.4213 1.0387 9.6123L2.0647 10.4463C1.8867 11.1853 1.7497 11.9503 1.6817 12.7303L0.4237 13.1263C0.0957 13.2353 -0.0003 13.3993 -0.0003 13.7143C-0.0003 14.0283 0.0957 14.1923 0.4237 14.2883L1.6817 14.7123C1.7497 15.4913 1.8727 16.2433 2.0647 16.9813L1.0387 17.8153C0.8067 17.9803 0.7107 18.1713 0.8337 18.4993C0.9157 18.8143 1.0937 18.9233 1.4077 18.8823L2.7347 18.8413C3.0487 19.5243 3.4587 20.2083 3.8827 20.8233L3.2127 21.9583C3.0627 22.2183 3.0077 22.4233 3.2407 22.6553C3.4997 22.9293 3.6917 22.9563 3.9647 22.8333L5.1547 22.3413C5.7007 22.9013 6.3027 23.4073 6.9317 23.8313L6.6717 25.1163C6.6037 25.4583 6.6857 25.6493 6.9457 25.7733C7.2597 25.9373 7.4377 25.8823 7.6697 25.6903L8.6267 24.8153C9.3377 25.1443 10.0757 25.4173 10.8147 25.6223L11.0197 26.9213C11.0737 27.2493 11.1567 27.3863 11.5117 27.4273C11.8397 27.4813 12.0037 27.3863 12.1407 27.1263L12.7697 25.9503C13.1247 25.9913 13.5347 26.0053 13.9177 26.0053ZM21.4647 8.8883C23.7757 8.8883 25.6897 6.9743 25.6897 4.6633C25.6897 2.3533 23.7757 0.4393 21.4647 0.4393C19.1547 0.4393 17.2407 2.3533 17.2407 4.6633C17.2407 6.9743 19.1547 8.8883 21.4647 8.8883ZM2.8167 13.7143C2.8167 9.6943 4.7987 6.2083 7.8477 4.2263L12.0727 11.5133C11.4297 12.0323 11.0327 12.8253 11.0327 13.7143C11.0327 14.6573 11.4707 15.4783 12.1547 15.9833L7.8337 23.1893C4.7847 21.2063 2.8167 17.7203 2.8167 13.7143ZM13.9317 15.6143C12.8657 15.6143 12.0317 14.7943 12.0317 13.7143C12.0317 12.6343 12.8657 11.8143 13.9317 11.8143C15.0117 11.8143 15.8457 12.6343 15.8457 13.7143C15.8457 14.7943 15.0117 15.6143 13.9317 15.6143ZM13.9177 24.9803C12.0037 24.9803 10.2267 24.5153 8.6677 23.6943L13.0157 16.4623C13.2887 16.5583 13.6037 16.5993 13.9317 16.5993C15.3947 16.5993 16.6247 15.5323 16.8027 14.1103H25.0467C24.8417 20.2223 20.0297 24.9803 13.9177 24.9803Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.15234375 26.761220358558965"
          className={className}
        >
          <path
            d="              M13.5627 25.4329C13.9457 25.4329 14.3827 25.4329 14.7797 25.3779L15.3667 26.4849C15.4907 26.7179 15.5997 26.7999 15.9277 26.7449C16.2697 26.7179 16.3107 26.6079 16.3657 26.2939L16.5567 25.0629C17.3227 24.8719 18.1017 24.5989 18.8127 24.2429L19.7417 25.0629C19.9197 25.2269 20.0837 25.2819 20.3707 25.1319C20.6167 25.0219 20.6857 24.8859 20.6167 24.5579L20.3707 23.3409C21.0407 22.9029 21.6567 22.3839 22.2167 21.7819L23.3377 22.2469C23.5837 22.3559 23.7347 22.3559 23.9937 22.0969C24.2267 21.8639 24.1717 21.7139 24.0077 21.4809L23.3787 20.4009C23.8437 19.7719 24.2677 19.0479 24.5817 18.3499L25.8257 18.3909C26.1267 18.4189 26.2637 18.3369 26.3317 18.0359C26.4417 17.7629 26.3867 17.6259 26.1547 17.4339L25.1837 16.6549C25.4027 15.8899 25.5257 15.0969 25.5937 14.2759L26.7697 13.8929C27.0707 13.7979 27.1527 13.6469 27.1527 13.3739C27.1527 13.0999 27.0707 12.9359 26.7697 12.8539L25.5937 12.4719C25.4157 10.7759 25.0737 9.4639 24.4997 8.2329C24.2947 8.4249 24.1037 8.5889 23.8847 8.7529C24.4317 10.0239 24.7457 11.4319 24.8147 12.9229H16.2697C16.0507 11.6379 14.9437 10.6669 13.6037 10.6669C13.2207 10.6669 12.8517 10.7489 12.5237 10.8989L8.1617 3.3519C9.7477 2.4769 11.5937 1.9849 13.5627 1.9849C14.5877 1.9849 15.4487 2.0949 16.3787 2.3409C16.4887 2.1219 16.6117 1.9169 16.7477 1.7389C15.4767 1.3699 13.6577 1.2329 12.3727 1.3839L11.7847 0.2629C11.6757 0.0439 11.5387 -0.0381 11.2107 0.0159C10.8827 0.0439 10.8417 0.1529 10.7867 0.4679L10.5957 1.6839C9.8167 1.8899 9.0507 2.1489 8.3127 2.5049L7.4097 1.6979C7.1917 1.5069 7.0547 1.4789 6.7817 1.6299C6.5347 1.7389 6.4667 1.8759 6.5347 2.2039L6.7817 3.4209C6.1117 3.8579 5.4957 4.3779 4.9217 4.9659L3.8147 4.5149C3.5687 4.3909 3.4177 4.3909 3.1577 4.6649C2.9397 4.8969 2.9667 5.0479 3.1167 5.2529L3.7737 6.3469C3.3227 6.9889 2.8987 7.6729 2.5707 8.4109L1.3127 8.3699C1.0257 8.3429 0.9027 8.4249 0.8207 8.7249C0.6977 9.0129 0.7657 9.1359 0.9847 9.3129L1.9687 10.0929C1.7777 10.8579 1.6267 11.6649 1.5587 12.4719L0.3827 12.8539C0.0687 12.9639 -0.0003 13.0729 -0.0003 13.3739C-0.0003 13.6609 0.0687 13.7839 0.3827 13.8929L1.5587 14.2899C1.6267 15.0969 1.7497 15.8899 1.9687 16.6549L0.9847 17.4339C0.7797 17.5849 0.6977 17.7219 0.8207 18.0359C0.8887 18.3369 1.0257 18.4189 1.3127 18.3909L2.5707 18.3499C2.8847 19.0479 3.3227 19.7719 3.7597 20.4009L3.1307 21.4809C2.9937 21.7139 2.9257 21.8639 3.1577 22.0969C3.4177 22.3559 3.5687 22.3559 3.8147 22.2469L4.9217 21.7819C5.4957 22.3839 6.1117 22.9029 6.7817 23.3409L6.5347 24.5579C6.4667 24.8859 6.5347 25.0219 6.7817 25.1319C7.0687 25.2819 7.2047 25.2269 7.4097 25.0629L8.3127 24.2429C9.0507 24.5989 9.8167 24.8719 10.5957 25.0769L10.7867 26.2939C10.8417 26.6079 10.8827 26.7179 11.2387 26.7449C11.5387 26.7999 11.6617 26.7179 11.7847 26.4849L12.3727 25.3779C12.7417 25.4329 13.1797 25.4329 13.5627 25.4329ZM20.9727 8.6299C23.2007 8.6299 25.0467 6.7839 25.0467 4.5559C25.0467 2.3409 23.2007 0.4949 20.9727 0.4949C18.7437 0.4949 16.8987 2.3409 16.8987 4.5559C16.8987 6.7839 18.7437 8.6299 20.9727 8.6299ZM2.3517 13.3739C2.3517 9.2449 4.4157 5.6769 7.5737 3.6939L11.9487 11.2549C11.2927 11.7329 10.8967 12.4989 10.8967 13.3739C10.8967 14.2899 11.3477 15.0969 12.0447 15.5889L7.5877 23.0539C4.4157 21.0709 2.3517 17.5029 2.3517 13.3739ZM13.6037 15.3699C12.4687 15.3699 11.5797 14.5089 11.5797 13.3739C11.5797 12.2389 12.4687 11.3499 13.6037 11.3499C14.7387 11.3499 15.6137 12.2389 15.6137 13.3739C15.6137 14.5089 14.7387 15.3699 13.6037 15.3699ZM13.5627 24.7629C11.6077 24.7629 9.7757 24.2699 8.1757 23.4089L12.6737 15.9029C12.9607 16.0129 13.2757 16.0539 13.6037 16.0539C15.0117 16.0539 16.1737 15.0009 16.2967 13.6199H24.8147C24.6777 19.8819 19.7827 24.7629 13.5627 24.7629Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
