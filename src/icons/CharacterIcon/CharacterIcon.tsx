import { IconProps } from "../../types"

export default function CharacterIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.5625 21.9296875"
          className={className}
        >
          <path
            d="              M3.1717 21.9293C4.9767 21.9293 5.9887 21.1093 6.4527 19.2093L6.8767 17.5823H13.5077L13.9457 19.2093C14.3967 21.1093 15.4087 21.9293 17.2267 21.9293C19.2497 21.9293 20.5627 20.7263 20.5627 18.8813C20.5627 18.1153 20.4527 17.5273 20.2067 16.7893L15.7907 3.7733C14.9297 1.2033 13.1797 0.0003 10.2537 0.0003C7.5197 0.0003 5.7967 1.2173 4.9217 3.7733L0.3277 17.1173C0.1227 17.7593 -0.0003 18.4163 -0.0003 18.9763C-0.0003 20.8083 1.2167 21.9293 3.1717 21.9293ZM8.1757 12.9333L10.2267 5.4963H10.3497L12.3867 12.9333Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.580078125 21.068359375"
          className={className}
        >
          <path
            d="              M2.1597 21.0684C3.4177 21.0684 4.1157 20.5074 4.4707 19.1814L5.5647 15.9554H12.9197L14.0137 19.1814C14.3687 20.5074 15.0527 21.0684 16.3247 21.0684C17.6917 21.0684 18.5797 20.2344 18.5797 18.9764C18.5797 18.4844 18.4977 18.0744 18.3337 17.5684L12.9067 2.5154C12.3187 0.8064 11.1697 0.0004 9.2697 0.0004C7.4787 0.0004 6.3297 0.8204 5.7427 2.5024L0.2457 17.7324C0.0817 18.1974 -0.0003 18.6344 -0.0003 19.0314C-0.0003 20.2894 0.8207 21.0684 2.1597 21.0684ZM6.5487 12.5914L9.2287 4.2794H9.3247L12.0177 12.5914Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.619140625 21.51953125"
          className={className}
        >
          <path
            d="              M2.6937 21.5192C4.2517 21.5192 5.0997 20.8222 5.5237 19.1952L6.2617 16.8032H13.2347L13.9727 19.1952C14.3827 20.8222 15.2437 21.5192 16.8027 21.5192C18.5117 21.5192 19.6187 20.4942 19.6187 18.9222C19.6187 18.2792 19.5367 17.7732 19.3187 17.1442L14.4377 3.1722C13.6997 1.0122 12.2227 0.0002 9.7887 0.0002C7.5057 0.0002 6.0567 1.0252 5.3187 3.1722L0.2867 17.4042C0.0957 17.9652 -0.0003 18.5122 -0.0003 18.9902C-0.0003 20.5492 1.0257 21.5192 2.6937 21.5192ZM7.4097 12.7692L9.7617 4.9082H9.8707L12.2087 12.7692Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.40625 20.166015625"
          className={className}
        >
          <path
            d="              M0.8747 20.1659C1.4217 20.1659 1.6817 19.9469 1.8867 19.3869L3.9517 13.8769H12.4417L14.5057 19.3869C14.7107 19.9469 14.9707 20.1659 15.5037 20.1659C16.0507 20.1659 16.4067 19.8379 16.4067 19.3179C16.4067 19.1269 16.3657 18.9629 16.2967 18.7439L9.4887 0.9429C9.2557 0.3149 8.8457 -0.0001 8.2027 -0.0001C7.5607 -0.0001 7.1367 0.3149 6.9177 0.9299L0.1097 18.7579C0.0407 18.9769 -0.0003 19.1409 -0.0003 19.3179C-0.0003 19.8519 0.3417 20.1659 0.8747 20.1659ZM4.4707 12.2909L8.1487 2.3789H8.2307L11.9087 12.2909Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.30859375 20.5078125"
          className={className}
        >
          <path
            d="              M1.5177 20.508C2.4337 20.508 2.8987 20.125 3.1997 19.168L4.7307 14.902H12.5367L14.0547 19.168C14.3557 20.125 14.8337 20.508 15.7367 20.508C16.6937 20.508 17.3087 19.934 17.3087 19.031C17.3087 18.703 17.2537 18.43 17.1307 18.061L11.0747 1.709C10.6507 0.561 9.8847 0 8.6407 0C7.4517 0 6.6717 0.561 6.2757 1.695L0.1777 18.129C0.0547 18.484 -0.0003 18.771 -0.0003 19.059C-0.0003 19.961 0.5747 20.508 1.5177 20.508ZM5.5097 12.373L8.5997 3.486H8.6817L11.7717 12.373Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.59765625 20.193359375"
          className={className}
        >
          <path
            d="              M1.1487 20.1936C1.8727 20.1936 2.2287 19.9196 2.4887 19.1546L4.2517 14.3286H12.3187L14.0817 19.1546C14.3417 19.9196 14.6977 20.1936 15.4087 20.1936C16.1327 20.1936 16.5977 19.7556 16.5977 19.0726C16.5977 18.8396 16.5567 18.6206 16.4477 18.3336L10.0347 1.2576C9.7207 0.4236 9.1597 -0.0004 8.2847 -0.0004C7.4377 -0.0004 6.8637 0.4106 6.5627 1.2446L0.1507 18.3476C0.0407 18.6346 -0.0003 18.8536 -0.0003 19.0856C-0.0003 19.7696 0.4377 20.1936 1.1487 20.1936ZM4.9217 12.2496L8.2437 3.0486H8.3127L11.6347 12.2496Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.85546875 20.740234375"
          className={className}
        >
          <path
            d="              M1.7907 20.7404C2.8577 20.7404 3.4177 20.2894 3.7457 19.1684L5.0857 15.3534H12.7017L14.0407 19.1684C14.3557 20.2894 14.9297 20.7404 15.9957 20.7404C17.1177 20.7404 17.8557 20.0564 17.8557 19.0044C17.8557 18.5934 17.7867 18.2654 17.6507 17.8284L11.8677 2.0504C11.3747 0.6564 10.4317 0.0004 8.9137 0.0004C7.4647 0.0004 6.5347 0.6564 6.0427 2.0374L0.2047 17.9514C0.0687 18.3474 -0.0003 18.7034 -0.0003 19.0454C-0.0003 20.0844 0.6837 20.7404 1.7907 20.7404ZM5.9607 12.4554L8.8727 3.8144H8.9687L11.8807 12.4554Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.16015625 20.138671875"
          className={className}
        >
          <path
            d="              M0.5197 20.1383C0.8207 20.1383 0.9707 20.0023 1.0937 19.6873L3.5407 13.2893H12.6057L15.0527 19.6873C15.1897 20.0023 15.3267 20.1383 15.6267 20.1383C15.9417 20.1383 16.1597 19.9473 16.1597 19.6333C16.1597 19.5373 16.1327 19.4143 16.0777 19.2913L8.7777 0.5193C8.6547 0.1913 8.4497 0.0003 8.0797 0.0003C7.7247 0.0003 7.4927 0.1773 7.3687 0.5063L0.0687 19.2913C0.0277 19.4143 -0.0003 19.5373 -0.0003 19.6333C-0.0003 19.9473 0.2047 20.1383 0.5197 20.1383ZM3.8687 12.3453L8.0387 1.5043H8.1077L12.2777 12.3453Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.0234375 20.125"
          className={className}
        >
          <path
            d="              M0.3277 20.1253C0.5197 20.1253 0.6017 20.0433 0.6837 19.8383L3.3357 13.0023H12.6877L15.3397 19.8383C15.4357 20.0433 15.5177 20.1253 15.6957 20.1253C15.8867 20.1253 16.0237 20.0153 16.0237 19.8103C16.0237 19.7423 16.0097 19.6603 15.9827 19.5783L8.4217 0.3013C8.3537 0.1363 8.2437 0.0003 8.0257 0.0003C7.8067 0.0003 7.6697 0.1233 7.6157 0.3013L0.0547 19.5783C0.0137 19.6603 -0.0003 19.7423 -0.0003 19.8103C-0.0003 20.0023 0.1367 20.1253 0.3277 20.1253ZM3.5687 12.3863L7.9847 1.0523H8.0387L12.4547 12.3863Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}