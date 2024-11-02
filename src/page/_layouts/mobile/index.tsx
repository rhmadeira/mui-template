interface IProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: IProps) {
  return <div>{children}</div>;
}
