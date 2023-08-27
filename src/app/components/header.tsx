import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export const Header_list = () => {
	const list = [
		{ data: '채용' },
		{ data: '이벤트' },
		{ data: '이력서' },
		{ data: '소셜' },
		{ data: '프리랜서' },
		{ data: 'AI 합격예측' },
	];
	return (
		<ul className='flex'>
			{list.map((el, key) => (
				<li
					className='p-4'
					key={key}>
					{el.data}
				</li>
			))}
		</ul>
	);
};

export default function Header() {
	return (
		<header className='border-b-2 border-black'>
			<nav className='max-w-wanted flex justify-between items-center m-auto'>
				<div>
					<div>
						<MenuIcon className='mr-4' />
						<a
							href='#'
							className='font-bold'>
							wanted
						</a>
					</div>
				</div>
				<Header_list />
				<aside>
					<ul className='flex'>
						<li className='mx-1'>
							<button>
								<SearchIcon />
							</button>
						</li>
						<li className='mx-1'>
							<button>회원가입/로그인</button>
						</li>
						<li className='mx-1'>|</li>
						<li className='mx-1'>
							<a href='#'>기업 서비스</a>
						</li>
					</ul>
				</aside>
			</nav>
		</header>
	);
}
