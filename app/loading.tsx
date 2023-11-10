const Loading: React.FC = () => {
  return (
    <div className="flex items-center h-screen flex-col gap-20 pt-20">
      <div className="text-2xl font-bold dark:text-white">Loading</div>
      <div className="animate-spin ml-3 h-5 w-5 border-t-2 border-blue-500 rounded-full"></div>
    </div>
  )
}

export default Loading
