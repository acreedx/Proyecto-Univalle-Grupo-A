function NotFoundMessage({ message }: { message: string }) {
  return (
    <h3 className="text-center mt-10 text-lg font-semibold text-white col-start-2 whitespace-normal min-[320px]:whitespace-nowrap md:text-1xl xl:text-3xl">
      {message}
    </h3>
  );
}

export default NotFoundMessage;
