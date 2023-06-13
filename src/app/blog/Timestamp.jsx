'use client';

import { StyledTimestamp } from "../globalStyles";
import { formatDate } from "../utils";

export default function Timestamp({ date }) {
  return (
    <StyledTimestamp>{formatDate(date)}</StyledTimestamp>
  )
}