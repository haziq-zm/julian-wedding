import { type ReactNode } from 'react'
import { FloralCorner } from './FloralCorner'
import { GeometricRosette } from './GeometricRosette'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'ivory' | 'olive' | 'parchment' | 'wine'
}

export function OrnamentalFrame({
  children,
  className = '',
  variant = 'ivory',
}: Props) {
  return (
    <div className={`ornate-frame ornate-frame--${variant} ${className}`}>
      <span className="ornate-frame-line ornate-frame-line--outer" aria-hidden />
      <span className="ornate-frame-line ornate-frame-line--inner" aria-hidden />
      <GeometricRosette className="ornate-frame-rosette ornate-frame-rosette--tl" />
      <GeometricRosette className="ornate-frame-rosette ornate-frame-rosette--br" />
      <FloralCorner className="ornate-frame-floral ornate-frame-floral--tl" corner="tl" />
      <FloralCorner className="ornate-frame-floral ornate-frame-floral--tr" corner="tr" />
      <FloralCorner className="ornate-frame-floral ornate-frame-floral--bl" corner="bl" />
      <FloralCorner className="ornate-frame-floral ornate-frame-floral--br" corner="br" />
      <div className="ornate-frame-body">{children}</div>
    </div>
  )
}
