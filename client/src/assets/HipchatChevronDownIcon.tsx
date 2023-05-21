import React from 'react'

type HipchatChevronDownIconProps = {
    color?: string,
    width?: string,
}

function HipchatChevronDownIcon({ color,width }: HipchatChevronDownIconProps) {
    return (
        <svg width={width || "20"} height={width || "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill="white" fill-opacity="0.01" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90998 8.57749C6.7543 8.7349 6.66699 8.94735 6.66699 9.16874C6.66699 9.39013 6.7543 9.60258 6.90998 9.75999L9.35914 12.2308C9.54081 12.41 9.77581 12.4992 10.0083 12.4992C10.2408 12.4992 10.4716 12.41 10.6491 12.2308L13.0908 9.76832C13.2463 9.61081 13.3335 9.3984 13.3335 9.17707C13.3335 8.95575 13.2463 8.74334 13.0908 8.58583C13.0143 8.50817 12.9231 8.44651 12.8225 8.40442C12.7219 8.36233 12.614 8.34065 12.505 8.34065C12.396 8.34065 12.288 8.36233 12.1874 8.40442C12.0869 8.44651 11.9957 8.50817 11.9191 8.58583L10.0041 10.5167L8.08164 8.57749C8.00495 8.50014 7.91369 8.43874 7.81314 8.39685C7.71259 8.35495 7.60474 8.33337 7.49581 8.33337C7.38688 8.33337 7.27903 8.35495 7.17848 8.39685C7.07793 8.43874 6.98667 8.50014 6.90998 8.57749Z" fill={color || "#F4F5F6 "} />
        </svg>


    )
}

export default HipchatChevronDownIcon