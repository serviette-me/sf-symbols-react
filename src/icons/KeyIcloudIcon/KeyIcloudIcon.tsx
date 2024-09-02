import { IconProps } from "../../types"

export default function KeyIcloudIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.283203125 26.509765625"
          className={className}
        >
          <path
            d="              M28.5737 26.5099C33.3867 26.5099 37.2827 22.9279 37.2827 18.4299C37.2827 15.3399 35.6017 12.4139 32.7167 11.2249C32.6897 4.6899 27.9177 -0.0001 21.6287 -0.0001C18.2517 -0.0001 15.1617 1.4489 13.1117 4.2789C9.2287 3.5959 5.6597 6.2889 5.2637 10.2539C1.9827 11.0609 -0.0003 14.1229 -0.0003 17.8559C-0.0003 22.6269 4.1567 26.5099 9.3927 26.5099ZM28.5877 21.6559H9.4197C6.9317 21.6559 5.0177 19.9339 5.0177 17.8559C5.0177 15.1899 6.8357 13.7269 9.1877 13.7269C9.4197 13.7269 9.5427 13.5899 9.5157 13.3439C9.0647 9.8029 11.5387 7.9019 15.0117 8.8599C15.2027 8.9009 15.3537 8.8599 15.4627 8.6819C16.9117 6.2619 18.7167 4.8539 21.5327 4.8539C25.1287 4.8539 27.9457 7.6559 28.0957 11.2929C28.1507 12.4139 28.0547 13.4669 27.9457 14.2049C27.9177 14.4509 28.0137 14.5609 28.2597 14.5879C30.7207 14.7929 32.2657 16.2559 32.2657 18.4299C32.2657 20.2209 30.6387 21.6559 28.5877 21.6559ZM25.4847 14.9019C25.4847 12.7559 23.7617 11.0609 21.6567 11.0609C20.1657 11.0609 18.8257 11.8809 18.1837 13.1929H13.3577C13.1117 13.1929 12.8377 13.2889 12.6737 13.4809L11.7307 14.5329C11.5117 14.7659 11.4977 15.1899 11.7847 15.4629L13.4397 17.1309C13.7537 17.4449 14.2187 17.3909 14.5327 17.1169L15.2027 16.4749L16.2417 17.4999C16.5427 17.8009 17.0217 17.8149 17.3357 17.4999L18.2247 16.6249C19.0037 17.9919 20.2207 18.7719 21.6567 18.7719C23.7617 18.7719 25.4847 17.0489 25.4847 14.9019ZM23.4607 14.9019C23.4607 15.5039 22.9827 15.9959 22.3667 15.9959C21.7797 15.9959 21.2867 15.5039 21.2867 14.9019C21.2867 14.3149 21.7797 13.8219 22.3667 13.8219C22.9827 13.8219 23.4607 14.3149 23.4607 14.9019Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.8203125 25.142578125"
          className={className}
        >
          <path
            d="              M27.7947 25.1425C32.2657 25.1425 35.8207 21.8475 35.8207 17.7055C35.8207 14.7385 34.1657 12.0175 31.3907 10.8695C31.3767 4.5525 26.8107 0.0005 20.8637 0.0005C17.3227 0.0005 14.4647 1.7225 12.6187 4.3345C8.9827 3.5005 5.3727 6.1255 5.1407 10.0215C1.9547 10.6775 -0.0003 13.5765 -0.0003 17.1175C-0.0003 21.5055 3.8417 25.1425 8.7907 25.1425ZM27.7947 21.6155H8.8047C5.8377 21.6155 3.6097 19.5505 3.6097 17.1175C3.6097 14.4105 5.3457 12.5915 7.9707 12.5915C8.1897 12.5915 8.2847 12.4825 8.2717 12.2635C8.0387 8.3945 10.7867 6.8225 13.9317 7.7515C14.1097 7.8065 14.2327 7.7655 14.3277 7.6015C15.7227 5.2095 17.6367 3.5275 20.8227 3.5275C24.8557 3.5275 27.8087 6.7125 28.0137 10.5545C28.0547 11.4435 27.9867 12.3325 27.9047 13.0295C27.8767 13.2345 27.9587 13.3435 28.1637 13.3715C30.6387 13.7405 32.2247 15.3945 32.2247 17.7055C32.2247 19.8785 30.2827 21.6155 27.7947 21.6155ZM25.0877 14.1915C25.0877 11.9905 23.3237 10.2265 21.1367 10.2265C19.5367 10.2265 18.1157 11.1565 17.4997 12.6055H11.9357C11.7307 12.6055 11.5387 12.6735 11.3887 12.8375L10.3907 13.8905C10.2267 14.0685 10.1987 14.3825 10.4177 14.5875L12.2367 16.4335C12.4687 16.6525 12.7967 16.6255 13.0297 16.4195L13.9727 15.4765L15.3537 16.8575C15.5587 17.0625 15.9007 17.0625 16.1327 16.8435L17.4317 15.5445C18.2107 17.2125 19.5507 18.1565 21.1367 18.1565C23.3107 18.1565 25.0877 16.3925 25.0877 14.1915ZM23.1057 14.1915C23.1057 14.8345 22.5857 15.3535 21.9297 15.3535C21.2737 15.3535 20.7537 14.8345 20.7537 14.1915C20.7537 13.5485 21.2737 13.0155 21.9297 13.0155C22.5857 13.0155 23.1057 13.5355 23.1057 14.1915Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.599609375 25.8671875"
          className={className}
        >
          <path
            d="              M28.2047 25.867C32.8537 25.867 36.5997 22.422 36.5997 18.088C36.5997 15.053 34.9177 12.223 32.0877 11.047C32.0737 4.621 27.3847 0 21.2737 0C17.8147 0 14.8337 1.572 12.8787 4.307C9.1187 3.555 5.5237 6.207 5.2087 10.145C1.9687 10.883 -0.0003 13.863 -0.0003 17.5C-0.0003 22.094 4.0057 25.854 9.1057 25.854ZM28.2187 21.629H9.1327C6.4117 21.629 4.3477 19.756 4.3477 17.5C4.3477 14.82 6.1247 13.193 8.6137 13.193C8.8457 13.193 8.9547 13.057 8.9277 12.838C8.5857 9.133 11.1837 7.396 14.5057 8.34C14.6837 8.381 14.8337 8.34 14.9297 8.176C16.3517 5.77 18.2107 4.225 21.1917 4.225C24.9917 4.225 27.8767 7.205 28.0547 10.937C28.1097 11.949 28.0137 12.92 27.9317 13.645C27.9047 13.863 27.9867 13.986 28.2187 14.014C30.6797 14.287 32.2387 15.846 32.2387 18.088C32.2387 20.057 30.4747 21.629 28.2187 21.629ZM25.2927 14.561C25.2927 12.4 23.5567 10.664 21.4097 10.664C19.8657 10.664 18.4977 11.525 17.8557 12.92H12.6877C12.4547 12.92 12.2227 13.002 12.0727 13.18L11.1017 14.232C10.9097 14.437 10.8827 14.807 11.1427 15.053L12.8787 16.789C13.1527 17.062 13.5487 17.035 13.8227 16.789L14.6287 15.996L15.8187 17.199C16.0777 17.459 16.4887 17.459 16.7617 17.186L17.8557 16.119C18.6347 17.623 19.9067 18.484 21.4097 18.484C23.5567 18.484 25.2927 16.734 25.2927 14.561ZM23.2967 14.561C23.2967 15.189 22.7907 15.695 22.1617 15.695C21.5467 15.695 21.0277 15.189 21.0277 14.561C21.0277 13.959 21.5467 13.439 22.1617 13.439C22.7907 13.439 23.2967 13.945 23.2967 14.561Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.564453125 23.0234375"
          className={className}
        >
          <path
            d="              M26.4687 23.0238C30.4477 23.0238 33.5647 20.1798 33.5647 16.5838C33.5647 13.7948 31.9917 11.3478 29.2987 10.3358C29.3947 4.3608 25.1427 -0.0002 19.7147 -0.0002C15.9827 -0.0002 13.4117 2.0238 11.8947 4.4848C8.6137 3.3498 4.9767 5.9058 4.9627 9.6658C1.9417 10.0348 -0.0003 12.6598 -0.0003 15.9278C-0.0003 19.8378 3.3767 23.0098 7.8747 23.0098ZM26.4547 21.3418L7.8747 21.3278C4.3337 21.3278 1.6957 18.8808 1.6957 15.9278C1.6957 13.1658 3.3497 10.9918 6.2477 10.9918C6.4257 10.9918 6.4937 10.8968 6.4937 10.7328C6.4937 6.7128 9.5427 5.1818 12.4137 6.2208C12.5647 6.2758 12.6597 6.2348 12.7287 6.0978C14.0817 3.7188 16.1327 1.6948 19.7147 1.6948C24.1857 1.6948 27.3847 5.2228 27.6577 9.4748C27.6987 10.0488 27.6447 10.7048 27.6167 11.2928C27.6037 11.4568 27.6717 11.5528 27.8227 11.5938C30.2967 12.1818 31.8687 14.0958 31.8687 16.5838C31.8687 19.2498 29.5037 21.3418 26.4547 21.3418ZM24.0217 13.1388C24.0217 10.9098 22.2577 9.1468 20.0567 9.1468C18.3617 9.1468 16.8847 10.1578 16.2967 11.7308H10.0487C9.9117 11.7308 9.7887 11.7718 9.6657 11.8948L8.6267 12.9338C8.5177 13.0428 8.5037 13.2068 8.6267 13.3298L10.5957 15.3258C10.7187 15.4488 10.8827 15.4488 10.9917 15.3258L12.2637 14.0408L13.9867 15.7908C14.0817 15.9008 14.2457 15.8868 14.3687 15.7638L16.1187 14.0408C16.8847 16.0098 18.3207 17.1168 20.0567 17.1168C22.2437 17.1168 24.0217 15.3398 24.0217 13.1388ZM22.0937 13.1248C22.0937 13.7948 21.5467 14.3418 20.8767 14.3418C20.1937 14.3418 19.6467 13.7948 19.6467 13.1248C19.6467 12.4548 20.1937 11.9078 20.8767 11.9078C21.5467 11.9078 22.0937 12.4418 22.0937 13.1248Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.890625 24.267578125"
          className={className}
        >
          <path
            d="              M27.3027 24.2679C31.5407 24.2679 34.8907 21.1509 34.8907 17.2539C34.8907 14.3419 33.2367 11.7719 30.5297 10.6369C30.5427 4.4569 26.0997 -0.0001 20.3707 -0.0001C16.7207 -0.0001 14.0137 1.9009 12.2907 4.3609C8.8317 3.4319 5.1817 6.0159 5.0587 9.8709C1.9277 10.4319 -0.0003 13.2349 -0.0003 16.6389C-0.0003 20.7949 3.6367 24.2679 8.4077 24.2679ZM27.3027 21.5879H8.4077C5.1407 21.5879 2.7067 19.3049 2.7067 16.6389C2.7067 13.9179 4.3887 11.8809 7.1917 11.8809C7.3827 11.8809 7.4787 11.7719 7.4647 11.5799C7.3827 7.4919 10.3087 6.1249 13.2347 7.0549C13.4117 7.1099 13.5217 7.0679 13.6037 6.9179C14.9567 4.5389 16.9527 2.6799 20.3577 2.6799C24.6777 2.6799 27.7407 6.1109 27.9457 10.0899C27.9867 10.8149 27.9457 11.6079 27.8767 12.2639C27.8637 12.4549 27.9317 12.5649 28.1097 12.5919C30.5977 13.0699 32.1837 14.8339 32.1837 17.2539C32.1837 19.6599 30.0507 21.5879 27.3027 21.5879ZM24.8277 13.7399C24.8277 11.4979 23.0367 9.6929 20.8087 9.6929C19.1407 9.6929 17.6777 10.6779 17.0487 12.2229H11.0327C10.8557 12.2229 10.7047 12.2769 10.5687 12.4279L9.5297 13.4809C9.3927 13.6309 9.3787 13.8629 9.5427 14.0269L11.4707 15.9829C11.6487 16.1469 11.8947 16.1469 12.0587 15.9689L13.1937 14.8339L14.7927 16.4339C14.9297 16.5979 15.1757 16.5839 15.3537 16.4059L16.9257 14.8609C17.7047 16.7209 19.1267 17.7599 20.8087 17.7599C23.0367 17.7599 24.8277 15.9689 24.8277 13.7399ZM22.8727 13.7269C22.8727 14.3969 22.3127 14.9429 21.6427 14.9429C20.9587 14.9429 20.4117 14.3969 20.4117 13.7269C20.4117 13.0569 20.9587 12.5099 21.6427 12.5099C22.3127 12.5099 22.8727 13.0429 22.8727 13.7269Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.37109375 23.76171875"
          className={className}
        >
          <path
            d="              M27.0157 23.7614C31.1447 23.7614 34.3707 20.7404 34.3707 16.9804C34.3707 14.1094 32.7167 11.6214 30.0507 10.5004C30.0777 4.4024 25.6897 0.0004 20.0977 0.0004C16.3927 0.0004 13.7537 1.9824 12.1137 4.3754C8.7497 3.3904 5.0857 5.9474 5.0177 9.7754C1.9277 10.2674 -0.0003 13.0294 -0.0003 16.3654C-0.0003 20.3844 3.5137 23.7614 8.1897 23.7614ZM27.0157 21.5604H8.1897C4.7437 21.5604 2.2007 19.1544 2.2007 16.3654C2.2007 13.6304 3.8557 11.4574 6.7537 11.4574C6.9457 11.4574 7.0137 11.3614 7.0137 11.1834C7.0137 6.9724 10.0487 5.7284 12.8517 6.6444C13.0157 6.6994 13.1117 6.6584 13.1937 6.5074C14.5197 4.1424 16.5567 2.2014 20.0977 2.2014C24.5817 2.2014 27.6857 5.7554 27.9177 9.8164C27.9587 10.4454 27.9177 11.1834 27.8637 11.8264C27.8497 12.0044 27.9177 12.0994 28.0817 12.1404C30.5707 12.6874 32.1697 14.5054 32.1697 16.9804C32.1697 19.5234 29.9277 21.5604 27.0157 21.5604ZM24.6917 13.4664C24.6917 11.1974 22.8727 9.3924 20.6307 9.3924C18.9217 9.3924 17.4177 10.4044 16.8027 12.0044H10.5137C10.3637 12.0044 10.2407 12.0454 10.1037 12.1814L9.0507 13.2484C8.9277 13.3574 8.9137 13.5624 9.0507 13.6854L11.0467 15.7094C11.1837 15.8454 11.3887 15.8454 11.5117 15.7094L12.7557 14.4514L14.4787 16.1874C14.5877 16.3104 14.7797 16.2964 14.9157 16.1604L16.6387 14.4644C17.4317 16.4334 18.8807 17.5274 20.6307 17.5274C22.8727 17.5274 24.6917 15.7224 24.6917 13.4664ZM22.7367 13.4534C22.7367 14.1364 22.1757 14.6974 21.4917 14.6974C20.7817 14.6974 20.2207 14.1364 20.2207 13.4534C20.2207 12.7694 20.7817 12.2094 21.4917 12.2094C22.1757 12.2094 22.7367 12.7554 22.7367 13.4534Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.30078125 24.63671875"
          className={className}
        >
          <path
            d="              M27.5077 24.637C31.8557 24.637 35.3007 21.438 35.3007 17.445C35.3007 14.506 33.6327 11.867 30.8987 10.732C30.8987 4.498 26.4007 0 20.5897 0C16.9807 0 14.2047 1.818 12.4417 4.348C8.9007 3.459 5.2637 6.057 5.0997 9.926C1.9417 10.527 -0.0003 13.371 -0.0003 16.844C-0.0003 21.096 3.7187 24.637 8.5727 24.637ZM27.5077 21.602L8.5857 21.588C5.4417 21.588 3.0897 19.4 3.0897 16.844C3.0897 14.123 4.7987 12.182 7.5327 12.182C7.7247 12.182 7.8207 12.072 7.8067 11.867C7.6697 7.875 10.5137 6.426 13.5347 7.342C13.7127 7.397 13.8227 7.355 13.9177 7.205C15.2847 4.826 17.2407 3.049 20.5627 3.049C24.7597 3.049 27.7677 6.357 27.9727 10.281C28.0137 11.074 27.9587 11.908 27.8907 12.578C27.8637 12.783 27.9457 12.893 28.1367 12.92C30.6117 13.357 32.1977 15.066 32.1977 17.445C32.1977 19.742 30.1467 21.602 27.5077 21.602ZM24.9377 13.932C24.9377 11.703 23.1597 9.926 20.9587 9.926C19.3187 9.926 17.8687 10.883 17.2407 12.387H11.4297C11.2387 12.387 11.0737 12.441 10.9237 12.592L9.8987 13.658C9.7477 13.809 9.7347 14.082 9.9117 14.26L11.8127 16.16C12.0037 16.365 12.2907 16.338 12.4687 16.16L13.5347 15.094L15.0387 16.611C15.2027 16.789 15.4907 16.789 15.6957 16.584L17.1447 15.148C17.9237 16.926 19.3047 17.924 20.9587 17.924C23.1597 17.924 24.9377 16.147 24.9377 13.932ZM22.9687 13.918C22.9687 14.574 22.4357 15.121 21.7657 15.121C21.0957 15.121 20.5627 14.574 20.5627 13.918C20.5627 13.262 21.0957 12.715 21.7657 12.715C22.4357 12.715 22.9687 13.248 22.9687 13.918Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.484375 22.0390625"
          className={className}
        >
          <path
            d="              M25.7307 22.0386C29.5447 22.0386 32.4847 19.4416 32.4847 16.0376C32.4847 13.3716 31.0347 10.9926 28.3007 10.1036C28.5057 4.3066 24.4177 -0.0004 19.1957 -0.0004C15.4487 -0.0004 12.9607 2.0786 11.5937 4.6076C8.4487 3.2946 4.8397 5.8376 4.8807 9.5016C1.9687 9.7206 -0.0003 12.1676 -0.0003 15.3266C-0.0003 19.0996 3.1987 22.0116 7.4647 22.0116ZM25.7167 21.0276L7.4507 20.9996C3.7867 20.9996 1.0117 18.5116 1.0117 15.3266C1.0117 12.5376 2.6937 10.3766 5.5777 10.3766C5.7287 10.3766 5.7967 10.2816 5.7967 10.1306C5.7967 6.3436 8.8867 4.4566 11.8257 5.6606C11.9627 5.7016 12.0447 5.6736 12.1267 5.5376C13.4937 3.1446 15.5727 1.0116 19.1957 1.0116C23.6657 1.0116 26.9747 4.5116 27.3167 9.0236C27.3437 9.5016 27.3027 10.0486 27.2887 10.5816C27.2887 10.7186 27.3437 10.8146 27.4667 10.8416C29.9417 11.5116 31.4587 13.5356 31.4587 16.0376C31.4587 18.8946 28.9567 21.0276 25.7167 21.0276ZM23.1467 12.6876C23.1467 10.5276 21.4237 8.8046 19.2907 8.8046C17.6367 8.8046 16.1877 9.8026 15.6267 11.3616H9.4197C9.3107 11.3616 9.2007 11.3886 9.0777 11.4976L8.0797 12.5096C7.9707 12.6196 7.9707 12.7286 8.0797 12.8376L10.0077 14.8066C10.1167 14.8886 10.2267 14.8886 10.3227 14.8066L11.6077 13.4946L13.3577 15.2576C13.4257 15.3396 13.5347 15.3126 13.6447 15.2306L15.4357 13.4666C16.1737 15.4496 17.5817 16.5426 19.2907 16.5426C21.4097 16.5426 23.1467 14.8206 23.1467 12.6876ZM21.2457 12.6876C21.2457 13.3296 20.7127 13.8496 20.0567 13.8496C19.4137 13.8496 18.8947 13.3296 18.8947 12.6876C18.8947 12.0316 19.4137 11.4976 20.0567 11.4976C20.7127 11.4976 21.2457 12.0036 21.2457 12.6876Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.923828125 21.546875"
          className={className}
        >
          <path
            d="              M25.3617 21.5471C29.0667 21.5471 31.9237 19.0581 31.9237 15.7641C31.9237 13.1521 30.5567 10.8011 27.7947 9.9801C28.0407 4.2931 24.0487 0.0001 18.9357 0.0001C15.1757 0.0001 12.7417 2.1051 11.4297 4.6761C8.3667 3.2671 4.7717 5.8101 4.8537 9.4331C1.9957 9.5571 -0.0003 11.9081 -0.0003 15.0251C-0.0003 18.7301 3.1037 21.5061 7.2597 21.5061ZM25.3477 20.8771L7.2457 20.8361C3.4997 20.8361 0.6697 18.3201 0.6697 15.0251C0.6697 12.2231 2.3657 10.0621 5.2367 10.0621C5.3867 10.0621 5.4277 9.9671 5.4277 9.8301C5.4277 6.1521 8.5447 4.0881 11.5257 5.3591C11.6487 5.4141 11.7307 5.3871 11.8127 5.2641C13.1797 2.8571 15.2847 0.6701 18.9357 0.6701C23.3927 0.6701 26.7697 4.1561 27.1387 8.7911C27.1797 9.2281 27.1247 9.7211 27.1247 10.2261C27.1247 10.3491 27.1797 10.4321 27.3027 10.4731C29.7497 11.1701 31.2537 13.2481 31.2537 15.7641C31.2537 18.7031 28.6837 20.8771 25.3477 20.8771ZM22.6957 12.4551C22.6957 10.3221 21.0137 8.6411 18.8947 8.6411C17.2537 8.6411 15.8317 9.6251 15.2847 11.1701H9.0917C9.0097 11.1701 8.8867 11.1971 8.7907 11.3071L7.7927 12.3051C7.6837 12.4001 7.6837 12.4821 7.7927 12.5921L9.7067 14.5471C9.8027 14.6151 9.8847 14.6151 9.9667 14.5471L11.2797 13.2211L13.0297 14.9841C13.0977 15.0531 13.1797 15.0251 13.2617 14.9571L15.0797 13.1801C15.8187 15.1481 17.2127 16.2561 18.8947 16.2561C20.9867 16.2561 22.6957 14.5601 22.6957 12.4551ZM20.8087 12.4551C20.8087 13.0981 20.2887 13.6031 19.6467 13.6031C19.0177 13.6031 18.4977 13.0981 18.4977 12.4551C18.4977 11.8121 19.0177 11.2931 19.6467 11.2931C20.2887 11.2931 20.8087 11.7851 20.8087 12.4551Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
