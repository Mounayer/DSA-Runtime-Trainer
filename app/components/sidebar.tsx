import { useState } from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import easyQuestions from "~/data/easy";
import hardQuestions from "~/data/hard";
import mediumQuestions from "~/data/medium";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`relative h-screen ${isCollapsed ? "" : "pl-48"}`}>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-3 ${
          isCollapsed ? "left-4" : "left-52"
        } z-10 p-2 bg-gray-200 rounded-full shadow-lg focus:outline-none`}
        aria-label="Toggle sidebar"
      >
        {isCollapsed ? "▶" : "◀"}
      </button>

      {/* Collapsable Sidebar */}
      {!isCollapsed && (
        <div className="fixed top-0 left-0 h-screen w-48 border-r border-gray-200 bg-gray-50 flex flex-col transition-all duration-300">
          {/* Sidebar Header */}
          <div className="p-4 font-bold text-xl text-gray-800 border-b border-gray-200">
            Runtime Trainer
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-auto">
            <FlowbiteSidebar aria-label="Sidebar with questions">
              <FlowbiteSidebar.Items>
                <FlowbiteSidebar.ItemGroup>
                  <FlowbiteSidebar.Item
                    href={`/`}
                    className="py-2 px-4 text-gray-700 hover:bg-gray-200"
                  >
                    Home
                  </FlowbiteSidebar.Item>
                </FlowbiteSidebar.ItemGroup>

                <FlowbiteSidebar.ItemGroup>
                  <div className="px-4 py-2 text-lg font-semibold">Easy</div>
                  {easyQuestions.map((question) => (
                    <FlowbiteSidebar.Item
                      key={question.id}
                      href={`/question/${question.id}?difficulty=easy`}
                      className="py-2 px-4 text-gray-700 hover:bg-gray-200"
                    >
                      Question {question.id}
                    </FlowbiteSidebar.Item>
                  ))}
                </FlowbiteSidebar.ItemGroup>

                <FlowbiteSidebar.ItemGroup>
                  <div className="px-4 py-2 text-lg font-semibold">Medium</div>
                  {mediumQuestions.map((question) => (
                    <FlowbiteSidebar.Item
                      key={question.id}
                      href={`/question/${question.id}?difficulty=medium`}
                      className="py-2 px-4 text-gray-700 hover:bg-gray-200"
                    >
                      Question {question.id}
                    </FlowbiteSidebar.Item>
                  ))}
                </FlowbiteSidebar.ItemGroup>

                <FlowbiteSidebar.ItemGroup>
                  <div className="px-4 py-2 text-lg font-semibold">Hard</div>
                  {hardQuestions.map((question) => (
                    <FlowbiteSidebar.Item
                      key={question.id}
                      href={`/question/${question.id}?difficulty=hard`}
                      className="py-2 px-4 text-gray-700 hover:bg-gray-200"
                    >
                      Question {question.id}
                    </FlowbiteSidebar.Item>
                  ))}
                </FlowbiteSidebar.ItemGroup>
              </FlowbiteSidebar.Items>
            </FlowbiteSidebar>
          </div>
        </div>
      )}
    </div>
  );
}
