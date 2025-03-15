const SkillBadge = (skills) => {
  return skills.map((skill, index) => 
    <div key={index} className="flex gap-2 border border-textColor px-3 py-2 rounded-xl items-center bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1">
      <img src={`Icons/${skill}.svg`} alt='iconLogo' className="w-[48px] bs-mx:w-[36px] xsm-mx:[28px] !p-1"/>
      <div className="text-textColor text-xl bs-mx:text-[18px] font-medium">{skill}</div>
    </div>
)
}

export { SkillBadge}