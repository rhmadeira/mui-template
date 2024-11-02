interface IProps {
  children: React.ReactNode;
}

export function WebLayout({ children }: IProps) {
  return <div>{children}</div>;
}
